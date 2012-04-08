#include<stdio.h>
#include<stdlib.h>
#include "rs232.c"
#include <mysql.h>
#include<time.h>


void delay_in_sec(int delay) //delay in seconds
{
	clock_t tick1 , tick2;
	tick1 = clock();
	while( (tick2/CLOCKS_PER_SEC - tick1/CLOCKS_PER_SEC ) < delay)
		tick2 = clock();
}

int main()
{
	MYSQL* con ;
	MYSQL_RES * res ;
	MYSQL_ROW row ;

    con = mysql_init(NULL);
	
   char *server = "localhost";
   char *user = "root";
   char *password = "root"; /* set me first */

   char *database = "zandu";


	// initiate the com port 
  int i, n,cport_nr=16,/* /dev/ttyS0 (COM1 on windows) */  bdrate=9600;       /* 9600 baud */
  if(OpenComport(cport_nr, bdrate))
  {
    printf("Can not open comport\n");

    return(0);
  }

 // initiate the mysql connection
   if (!mysql_real_connect(con, server,user, password, database, 0, NULL, 0)) {
      fprintf(stderr, "%s\n", mysql_error(con));
      exit(1);
   }

    //start the main logic

	char query[100] ;
	char * storeTime  = (char *)malloc(100);
	char * timeFormat = (char *)malloc(100);
	timeFormat = "%Y-%m-%d %T";

	
	
	
	//sprintf(query,"select * from SendToBot order by timestampdiff(microsecond,time_stamp,current_timestamp) desc");
	sprintf(query,"select * from sendtobot");

	 /* send SQL query */
   if (mysql_query(con, query)) 
   {
      fprintf(stderr, "%s\n", mysql_error(con));
      exit(1);
   }
   i = 0 ;
   int j =  0;

	while(1)
    {
		res = mysql_use_result(con);
		while( (row = mysql_fetch_row(res) ) != NULL )
		{
			
			printf("%s\t %d \t %s\n",row[3],i,row[2]);

			int n , j ;

			for(j = 0 ; j < 2 ; j ++)
			{
				n = SendByte(cport_nr,row[3][j]) ;
				
			}
			
			//n = SendBuf(cport_nr,row[3],2) ;
            i ++ ;		
			strcpy(storeTime,row[2]) ;	
		}
		
		
		sprintf(query,"delete from sendtobot where time_stamp <= \"%s\"",storeTime);
		if (mysql_query(con,query)) 
		{
      		fprintf(stderr, "%s\n", mysql_error(con));
		    exit(1);
   		}
		
		mysql_free_result(res);
		
		sprintf(query,"select * from sendtobot order by timestampdiff(microsecond,time_stamp,str_to_date(\'%s\',\'%s\'))desc;",storeTime,timeFormat);
		//sprintf(query,"select * from sendtobot");
		if (mysql_query(con,query)) 
		{
      		fprintf(stderr, "%s\n", mysql_error(con));
		    exit(1);
   		}


   	}
  
}
