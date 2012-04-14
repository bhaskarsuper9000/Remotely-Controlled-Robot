#include<stdio.h>

int main()
{
	int i = 1;
	while(1){
		if(i % 2 == 0){
			if(i % 3 == 0){
				if(i % 5 == 0){
					break;
				}
			}
		}
		printf("\ni = %d",i);
		i++;
	}
	return 0;
}
