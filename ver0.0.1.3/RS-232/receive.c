#include <stdlib.h>
#include <stdio.h>
#include<string.h>
#include <mysql.h>
#include<time.h>

#include "rs232.h"
#include "rs232.c"

int main(int argc, char *argv[])
{

	   MYSQL* con ;
	   MYSQL_RES * res ;
	   MYSQL_ROW row ;

	   con = mysql_init(NULL);
	
	   char *server = "localhost";
	   char *user = "root";
	   char *password = "root"; /* set me first */

	   char *database = "zandu";


	   int i, n,cport_nr=16,        /* /dev/ttyS0 (COM1 on windows) */bdrate=9600;       /* 9600 baud */

	   unsigned char buf[4096];
	   char sensorValueQuery[200], registerQuery[200];
	   char temp ;
	   char sensorValues[100];
	   int count  = 0 ;
	   int j;
	   int gotNewBot = 0, regNewBot = 0, botId = -1;
	   
	   if(argc == 2){
			cport_nr = atoi(argv[1]);
	   }

	   printf("I am here on  31\n");
	   if(OpenComport(cport_nr, bdrate))
	   {
		 printf("Can not open comport\n");
		 return(0);
	   }

	  // initiate the mysql connection
      if (!mysql_real_connect(con, server,user, password, database, 0, NULL, 0)) 
      {
        fprintf(stderr, "%s\n", mysql_error(con));
        exit(1);
      }

		/*queries for different works */
		
		
		
		/**/

		
	   while(1)
	  {
		n = PollComport(cport_nr, buf, 1);
		
	
		if(n > 0)
		{
		
			/* Registration logic */
			if(gotNewBot && n == 1){
				botId = (int) buf[0];
				regNewBot = 1;
			}
			else if(n == 2){
				if(buf[0] == '@'){
					botId = (int) buf[1];
					regNewBot = 1;
				}
			}
			else if(n == 1){
				if(buf[0] == '@'){
					gotNewBot = 1;
					continue;
				}
			}
			
			if(regNewBot){
				sprintf(registerQuery,"insert into bot values (\'%d\',CURRENT_TIMESTAMP,\'%d\')",botId,0);
			
				if (mysql_query(con,registerQuery)) 
				{
					fprintf(stderr, "%s\n", mysql_error(con));
					gotNewBot = 0;regNewBot = 0;
					continue;
					//exit(1);
				}
				//mysql_free_result(res);
			
				sprintf(registerQuery,"insert into sendtobot values (\'%d\',\'%s\',CURRENT_TIMESTAMP,\'%c\')",botId,"server",'Y');
			
				if (mysql_query(con,registerQuery)) 
				{
					fprintf(stderr, "%s\n", mysql_error(con));
					//exit(1);
				}
				
				sprintf(registerQuery,"insert into botinfo values (\'%d\',\'%d\',\'%s\',\'%s\',\'%s\',\'%s\',\'%s\',\'%s\',\'%s\',\'%s\',\'%s\')",botId,1101, "0:0:0:0:0:0:0:0:0", "0:0:0:0:0:0:0:0:0:0:0:0", "0","0", "0","10", "10", "0", "0");
			
				if (mysql_query(con,registerQuery)) 
				{
					fprintf(stderr, "%s\n", mysql_error(con));
					//exit(1);
				}
				
				gotNewBot = 0;regNewBot = 0;
				continue;
			}
				
				/* Registration logic ends*/
		  
		  /*sensor wala logic*/
		  sensorValues[count ++ ]  = buf[0] ;
		  
		  if(sensorValues[count-1] == '#')
		  {
				for(j =  0 ; sensorValues[j] != '#'; j++)
				{
					printf("%c",sensorValues[j]);
				}
				sensorValues[j] = '\0';		//else garbage values can go into a database
				
				if(sensorValues[2] == 'S'){
					sprintf(sensorValueQuery,"update botinfo set sensor=\'%s\' where bot_id = \'%d\' ;",sensorValues+4,sensorValues[0]);
					//puts(sensorValues);
				}
				else if(sensorValues[2] == 'P'){
					sprintf(sensorValueQuery,"update botinfo set port_io=\'%s\' where bot_id = \'%d\' ;",sensorValues+4,sensorValues[0]);
				}
			// 0 replaced by 2||sensorValues + 2 repalce by sensorValues + 4 || botID replaced by sensorValues[0] || %d replaced by %c
				if (mysql_query(con,sensorValueQuery)) 
				{
					printf("%s\n",sensorValueQuery);
			    	fprintf(stderr, "%s\n", mysql_error(con));
		    		//exit(1);
			   	}
				mysql_free_result(res);

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

		 
		  
		}


		}


  return(0);
}
