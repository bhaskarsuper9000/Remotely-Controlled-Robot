#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <mysql.h>
#include <time.h>

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
	char sensorValueQuery[200];
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

	

	/*Infinite loop of daemon*/	
	while(1)
	{
		n = PollComport(cport_nr, buf, 1);
		
		if(n > 0)
		{
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
				}
			}
			
			if(regNewBot){
				/*queries for different works */
				sprintf(sensorValueQuery,"insert into bot values (\'%d\',CURRENT_TIMESTAMP,\'%d\')",botId,0);
			
				if (mysql_query(con,sensorValueQuery)) 
				{
			    	fprintf(stderr, "%s\n", mysql_error(con));
					exit(1);
				}
				//mysql_free_result(res);
				
				sprintf(sensorValueQuery,"insert into sendtobot values (\'%d\',\'%s\',CURRENT_TIMESTAMP,\'%c\')",botId,"server",'Y');
			
				if (mysql_query(con,sensorValueQuery)) 
				{
			    	fprintf(stderr, "%s\n", mysql_error(con));
					exit(1);
				}
			}
		}
	}

  	return(0);
}
