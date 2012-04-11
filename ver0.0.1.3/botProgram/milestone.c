#include <avr/io.h>
#include <avr/interrupt.h>
#include <util/delay.h>
#include <math.h> //included to support power function
#include<string.h>
#include<stdlib.h>
#include "lcd.c"

char COMMAND[3] ={0,0,'\0'};
char LCD_PRINT[16] ;
char newPortValues[51];

unsigned long int ShaftCountLeft = 0; //to keep track of left position encoder 
unsigned long int ShaftCountRight = 0; //to keep track of right position encoder

unsigned int count = 0 ;
unsigned int charCount =  0 ;
unsigned int portCount = 0;
int sensor_number  = 0 ;
int PRINT_ON_LCD =  0 ;
int START_PRINTING_ON_LCD = 0 ;

int PORT_VAL_AVAIL = 0 ;
int START_SETTING_PORT_VALUES = 0;

unsigned int lCount = 0;
unsigned int rCount = 0;

void getLCount();
void getRCount();
void resetShaftCount();
void sendPortValues();
void setPortVaules();

void sendString(char id[10]);
unsigned char ADC_Conversion(unsigned char);
unsigned char ADC_Value;
unsigned int BATT_Voltage;

unsigned char bot_id = 'A';


//Function to configure INT1 (PORTD 3) pin as input for the left position encoder
void left_encoder_pin_config (void)
{
 DDRD  = DDRD & 0xF7;  //Set the direction of the PORTD 3 pin as input
 PORTD = PORTD | 0x08; //Enable internal pull-up for PORTD 3 pin
}

//Function to configure INT0 (PORTD 2) pin as input for the right position encoder
void right_encoder_pin_config (void)
{
 DDRD  = DDRD & 0xFB;  //Set the direction of the PORTD 2 pin as input
 PORTD = PORTD | 0x04; //Enable internal pull-up for PORTD 2 pin
}

void left_position_encoder_interrupt_init (void) //Interrupt 1 enable
{
 cli(); //Clears the global interrupt
 MCUCR = MCUCR | 0x08; // INT1 is set to trigger with falling edge
 GICR = GICR | 0x80;   // Enable Interrupt INT1 for left position encoder
 sei(); // Enables the global interrupt 
}

void right_position_encoder_interrupt_init (void) //Interrupt 0 enable
{
 cli(); //Clears the global interrupt
 MCUCR = MCUCR | 0x02; // INT0 is set to trigger with falling edge
 GICR = GICR | 0x40;   // Enable Interrupt INT5 for right position encoder
 sei(); // Enables the global interrupt 
}

//ISR for right position encoder
ISR(INT0_vect)  
{
 ShaftCountRight++;  //increment right shaft position count
 rCount++;
}

//ISR for left position encoder
ISR(INT1_vect)
{
 ShaftCountLeft++;  //increment left shaft position count
 lCount++;
}


void resetShaftCount()
{
	rCount = 0;
	lCount = 0;
}



void lcd_port_config (void)
{
 DDRC = DDRC | 0xF7;    //all the LCD pin's direction set as output
 PORTC = PORTC & 0x80;  // all the LCD pins are set to logic 0 except PORTC 7
}

void adc_pin_config (void)
{
 DDRA = 0x00;  //set PORTA direction as input
 PORTA = 0x00; //set PORTA pins floating
}

void motion_pin_config (void)
{
 DDRB = DDRB | 0x0F;   //set direction of the PORTB3 to PORTB0 pins as output
 PORTB = PORTB & 0xF0; // set initial value of the PORTB3 to PORTB0 pins to logic 0
 DDRD = DDRD | 0x30;   //Setting PD4 and PD5 pins as output for PWM generation
 PORTD = PORTD | 0x30; //PD4 and PD5 pins are for velocity control using PWM
}

void buzzer_pin_config (void)
{
 DDRC = DDRC | 0x08;		//Setting PORTC 3 as outpt
 PORTC = PORTC & 0xF7;		//Setting PORTC 3 logic low to turnoff buzzer
}

void port_init()
{
	adc_pin_config();	
	motion_pin_config();
 	buzzer_pin_config();
	lcd_port_config();
	left_encoder_pin_config();    //left encoder pin config
 	right_encoder_pin_config();   //right encoder pin config	
}

void adc_init()
{
 ADCSRA = 0x00;
 ADMUX = 0x20;		//Vref=5V external --- ADLAR=1 --- MUX4:0 = 0000
 ACSR = 0x80;
 ADCSRA = 0x86;		//ADEN=1 --- ADIE=1 --- ADPS2:0 = 1 1 0
}


void uart0_init(void)
{
 UCSRB = 0x00; //disable while setting baud rate
 UCSRA = 0x00;
 UCSRC = 0x86;
 UBRRL = 0x2F; //set baud rate lo  //67 is for 16MHz 9600 baudrate
 UBRRH = 0x00; //set baud rate hi
 UCSRB = 0x98; 
}

void init_devices()
{
	cli();         //Clears the global interrupts
 	port_init();
	lcd_set_4bit();
    lcd_init();
	adc_init();
 	uart0_init();
	left_position_encoder_interrupt_init();
 	right_position_encoder_interrupt_init();
	sei();         //Enables the global interrupts
}


void USART_Transmit(char data )
{
	/* Wait for empty transmit buffer */
	while ( !( UCSRA & (1<<UDRE)) )	;
	/* Put data into buffer, sends the data */
	UDR = data;
}


SIGNAL(SIG_UART_RECV) 
{
 unsigned char receive_data=0;   // used to save Receiving data

 receive_data = UDR ;

 if(PORT_VAL_AVAIL)
 {
 	if(receive_data == '#')
	{
		PORT_VAL_AVAIL =  0;
		START_SETTING_PORT_VALUES = 1 ;
	}

	newPortValues[portCount % 51] = receive_data ;
	UDR = receive_data;
	portCount ++ ;
 }

 if(PRINT_ON_LCD)
 {
 	if(receive_data == '#')
	{
		PRINT_ON_LCD =  0;
		START_PRINTING_ON_LCD = 1 ;
	}

	LCD_PRINT[charCount % 16] = receive_data ;
	UDR = receive_data ;
	charCount ++ ;

 }
 else
 {
 	
 	COMMAND[count % 2] = receive_data ;
	count ++ ;
 }

}

void sendSensorValues()
{
  USART_Transmit('S');
  USART_Transmit(':');
  int sensor_number  = 0;
  for(sensor_number = 0 ; sensor_number < 7 ; sensor_number ++)
  {
  		
  		 ADC_Value = ADC_Conversion(sensor_number);
 
 		 //lcd_print(row, coloumn, ADC_Value, 3);
 
 		int value = (int)(ADC_Value) ;
 		char temp [4] ;
 		itoa(value,temp,10);
		sendString(temp);

		USART_Transmit(':');
  }

	char lcount[4],rcount[4];
	itoa(lCount,lcount,10);
	itoa(rCount,rcount,10);

	sendString(lcount);
	USART_Transmit(':');
	sendString(rcount);	
	USART_Transmit('#');
}

void sendPortValues()
{
  	char temp[4];

	USART_Transmit('P');
  	USART_Transmit(':');

	/*SEnding DDR Values*/
	itoa(DDRA,temp,10);
	sendString(temp);
	USART_Transmit(':');

	itoa(DDRB,temp,10);
	sendString(temp);
	USART_Transmit(':');

	itoa(DDRC,temp,10);
	sendString(temp);
	USART_Transmit(':');

	itoa(DDRD,temp,10);
	sendString(temp);
	USART_Transmit(':');
	

	

	/*Sending PIN values*/

	itoa(PINA,temp,10);
	sendString(temp);
	USART_Transmit(':');

	itoa(PINB,temp,10);
	sendString(temp);
	USART_Transmit(':');

	itoa(PINC,temp,10);
	sendString(temp);
	USART_Transmit(':');

	itoa(PIND,temp,10);
	sendString(temp);
	USART_Transmit(':');

	/*Sending PORT Values*/
	itoa(PORTA,temp,10);
	sendString(temp);
	USART_Transmit(':');


	itoa(PORTB,temp,10);
	sendString(temp);
	USART_Transmit(':');
 
	itoa(PORTC,temp,10);
	sendString(temp);
	USART_Transmit(':');

	itoa(PORTD,temp,10);
	sendString(temp);

	
	USART_Transmit('#');
}


/*Handling of new PORT values received from server*/

	void setPortValues()
	{

		char temp[4];

	/*	sendString(newPortValues) ;

		sendString(strtok(newPortValues, ":"));*/

		
		DDRA = atoi(strtok(newPortValues, ":"));		
		itoa(DDRA,temp,10);
		sendString(temp);
		

		DDRB = atoi(strtok(NULL, ":"));	
		itoa(DDRB,temp,10);
		sendString(temp);

		DDRC = atoi(strtok(NULL, ":"));		
		itoa(DDRC,temp,10);
		sendString(temp);

		DDRD = atoi(strtok(NULL, ":"));		
		itoa(DDRD,temp,10);
		sendString(temp);

		PINA = atoi(strtok(NULL, ":"));
		itoa(PINA,temp,10);
		sendString(temp);

		PINB = atoi(strtok(NULL, ":"));
		itoa(PINB,temp,10);
		sendString(temp);

		PINC = atoi(strtok(NULL, ":"));
		itoa(PINC,temp,10);
		sendString(temp);

		PIND = atoi(strtok(NULL, ":"));
		itoa(PIND,temp,10);
		sendString(temp);
			
		PORTA = atoi(strtok(NULL, ":"));
		itoa(PORTA,temp,10);
		sendString(temp);

		PORTB = atoi(strtok(NULL, ":"));
		itoa(PORTB,temp,10);
		sendString(temp);

		PORTC = atoi(strtok(NULL, ":"));
		itoa(PORTC,temp,10);
		sendString(temp);

		PORTD = atoi(strtok(NULL, "#"));	
		itoa(PORTD,temp,10);
		sendString(temp);

			

	}


/* Port Handling Ends */


void resetCOMMAND()
{	
	int i = 0 ;
	for(i = 0 ; i < 2 ;i ++)
		COMMAND[i] = '\0' ;

	count =  0 ;
}

unsigned char ADC_Conversion(unsigned char Ch)
{
 unsigned char a;
 Ch = Ch & 0x07;  			
 ADMUX= 0x20| Ch;	   		
 ADCSRA = ADCSRA | 0x40;		//Set start conversion bit
 while((ADCSRA&0x10)==0);	    //Wait for ADC conversion to complete
 a=ADCH;
 ADCSRA = ADCSRA|0x10;          //clear ADIF (ADC Interrupt Flag) by writing 1 to it
 return a;
}

void sendString(char id[10])
{		
	int i = 0; 
	for(i = 0 ; id[i] != '\0'; i ++)
		USART_Transmit(id[i]);
}

void motion_set (unsigned char Direction)
{
 unsigned char PortBRestore = 0;

 Direction &= 0x0F; 			// removing upper nibbel as it is not needed
 PortBRestore = PORTB; 			// reading the PORTB's original status
 PortBRestore &= 0xF0; 			// setting lower direction nibbel to 0
 PortBRestore |= Direction; 	// adding lower nibbel for direction command and restoring the PORTB status
 PORTB = PortBRestore; 			// setting the command to the port
}

void forward (void)         //both wheels forward
{
  motion_set(0x06);
}

void backward (void)        //both wheels backward
{
  motion_set(0x09);
}

void left (void)            //Left wheel backward, Right wheel forward
{
  motion_set(0x05);
}

void right (void)           //Left wheel forward, Right wheel backward
{   
  motion_set(0x0A);
}

void stop (void)            //hard stop
{
  motion_set(0x00);
}

void buzzer_on (void)
{
 unsigned char port_restore = 0;
 port_restore = PINC;
 port_restore = port_restore | 0x08;
 PORTC = port_restore;
}

void buzzer_off (void)
{
 unsigned char port_restore = 0;
 port_restore = PINC;
 port_restore = port_restore & 0xF7;
 PORTC = port_restore;
}

void resetLCDArray()
{
	int i ;
	for(i = 0; i < 15; i ++)
		LCD_PRINT[i] = ' ';

	LCD_PRINT[i] = '\0' ;

	charCount =  0;

}
void resetPORTArrayValues()
{
	int i ;
	for(i = 0 ; i < 51 ; i ++)
		newPortValues[ i ] = '\0' ;

	portCount = 0 ;
} 
void printOnLCD(char * text)
{
  lcd_string(text);
}


int main()
{
	init_devices();	
	_delay_ms(20000);
	for(int i=0;i<2;i++)
	{
		USART_Transmit('@');
		USART_Transmit(bot_id);
		_delay_ms(10000);
	}
	sendSensorValues();

	while(1)
	{
		if(strcmp(COMMAND,"F#") == 0)
		{
			forward();

			//sendString(COMMAND);
			sendSensorValues();
			resetCOMMAND();
			resetShaftCount();
		}
		else if(strcmp(COMMAND,"B#") == 0)
		{
			backward() ;

			//sendString(COMMAND);
			sendSensorValues();
			resetCOMMAND();
			resetShaftCount();
		}
		else if(strcmp(COMMAND,"R#") == 0)
		{
			right();
			//sendString(COMMAND);
			sendSensorValues();
			resetCOMMAND();
			resetShaftCount();
		}
		else if(strcmp(COMMAND,"L#") == 0)
		{
			left();

			//sendString(COMMAND);
			sendSensorValues();
			resetCOMMAND();
			resetShaftCount();
		}

		else if(strcmp(COMMAND,"Z#") == 0)
		{
			buzzer_on();
			//sendString(COMMAND);
			//sendSensorValues();
			resetCOMMAND();
		}
		else if(strcmp(COMMAND,"N#") == 0)
		{
			buzzer_off() ;
			//sendString(COMMAND);
			//sendSensorValues();
			resetCOMMAND();
		}
		
		else if(strcmp(COMMAND,"S#") == 0)
		{
			stop() ;
			//sendString(COMMAND);
			sendSensorValues();
			resetCOMMAND();
			resetShaftCount();
		}

		else if(strcmp(COMMAND,"P#") == 0)
		{
			
			sendPortValues();
			resetCOMMAND();
		}
		
		else if(strcmp(COMMAND,"D#") == 0)
		{
			PRINT_ON_LCD = 1 ;
		
			lcd_init() ;			
			//sendString(COMMAND);
			resetCOMMAND();
		}
		
		else if(strcmp(COMMAND,"W#") == 0)
		{
			PORT_VAL_AVAIL = 1 ;
			resetCOMMAND();
		}
		
		else if(START_SETTING_PORT_VALUES)
		{
			setPortValues();
			START_SETTING_PORT_VALUES = 0 ;
			resetPORTArrayValues();
		}	
		

		else if(START_PRINTING_ON_LCD)
		{
			printOnLCD(LCD_PRINT);
			START_PRINTING_ON_LCD = 0 ;
			resetLCDArray();
		}
		
		else if(count == 3)
		{
			resetCOMMAND() ;

			//problem is if supppose the pakctes get lost and are not interpreted correctly then in 
			//that case small problem occurs.This block handles it but I am not sure if it perfectly 
			//handles it.
		}
	}

	return 0;
}
