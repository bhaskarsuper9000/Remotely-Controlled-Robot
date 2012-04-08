#include <stdlib.h>
#include <stdio.h>
#include<string.h>

#include<time.h>

#ifdef _WIN32
#include <Windows.h>
#else
#include <unistd.h>
#endif

#include "rs232.h"
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
  int i, n,cport_nr=16,        /* /dev/ttyS0 (COM1 on windows) */bdrate=9600;       /* 9600 baud */

  unsigned char buf[4096];
  
  char temp ;
  

  printf("I am here on  31\n");
  if(OpenComport(cport_nr, bdrate))
  {
    printf("Can not open comport\n");

    return(0);
  }

	char str[13];
	int count  = 0 ;
	int j;
   while(1)
  {
    n = PollComport(cport_nr, buf, 1);
		
	
    if(n > 0)
    {
	  str[count ++ ]  = buf[0] ;
	  
	  if(str[count-1] == '#')
	  {
			for(j =  0 ; str[j] != '#'; j++)
				printf("%c",str[j]);
			printf("\n");
			count = 0;
	  }

	
      buf[n] = 0;   
      for(i=0; i < n; i++)
      {
        if(buf[i] < 32)  /* replace unreadable control-codes by dots */
        {
          buf[i] = '.';
        }
      }

     // printf("received %i bytes: %c , %d \n", n, buf[0],strlen((char *)buf));
	  
    }


    }


  return(0);
}
