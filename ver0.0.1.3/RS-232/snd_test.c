

#include <stdlib.h>
#include <stdio.h>
#include<time.h>

#ifdef _WIN32
#include <Windows.h>
#else
#include <unistd.h>
#endif

#include "rs232.c"


void delay_in_sec(int delay) //delay in seconds
{
	clock_t tick1 , tick2;
	tick1 = clock();
	while( (tick2/CLOCKS_PER_SEC - tick1/CLOCKS_PER_SEC ) < delay)
		tick2 = clock();
}


int main()
{
  int i, n,
      cport_nr=16,        /* /dev/ttyS0 (COM1 on windows) */
      bdrate=9600;       /* 9600 baud */

  unsigned char buf[4096];
  unsigned char str[] = {'F','#','\0'};
							
						  

	printf("I am here on  31\n");
  if(OpenComport(cport_nr, bdrate))
  {
    printf("Can not open comport\n");

    return(0);
  }

  i = 0 ;
  while(1)
  {
		
	int n, j ,k;
	
	for(j = 0 ; str[j] != '\0' ; j ++)
	{
		n = SendByte(cport_nr,str[j]);
		delay_in_sec(1);
	}
	delay_in_sec(5);
    i ++ ;
  }


  return(0);
}
