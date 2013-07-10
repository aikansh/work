#include<iostream>
#include<queue>
#include<fstream>
#include<stack>

using namespace std;

struct node{
	int x;
	int y;
};

char mat[200][200]={'0'};
int main()
{
	int T;
	int destx,desty;
	ofstream fout("prob2.out");
	cin>>T;
	for(int i=0;i<200;i++){
		for(int j=0;j<200;j++)
			mat[i][j]='0';
		}
	while(T--){
		node start;
		start.x=100;
		start.y=100;

		cin>>destx;
		cin>>desty;
		destx=destx+100;
		desty=desty+100;
		queue<node> q;

		q.push(start);
		int steps=1;
		bool isDone=false;
		while(!isDone){
			node elem=q.front();
			q.pop();
			if((elem.x-steps)>=0)
			{
				cout<<"North"<<" ";
				node top;
				top.x=elem.x-steps;
				top.y=elem.y;
				if(mat[top.x][top.y]=='0'){
					mat[top.x][top.y]='N';
					q.push(top);
					if(top.x==destx && top.y==desty){
						isDone=true;
						continue;
					}
				}
			}	
			if(elem.y-steps >=0){
				cout<<"West"<<" ";
				node left;
				left.y=elem.y-steps;
				left.x=elem.x;
				if(mat[left.x][left.y]=='0'){
					mat[left.x][left.y]='W';
					q.push(left);
					if(left.x==destx && left.y==desty){
						isDone=true;
						continue;
					}		
				}
			}
			if(elem.y+steps < 200){
				cout<<"East"<<" ";	
				node right;
				right.y=elem.y+steps;
				right.x=elem.x;
				if(mat[right.x][right.y]=='0'){
					mat[right.x][right.y]='E';
					q.push(right);
					if(right.x==destx && right.y==desty){
						isDone=true;
						continue;
					}	
				}
			}
			if(elem.x+steps < 200){
				cout<<"South"<<" ";	
				node bottom;
				bottom.y=elem.y+steps;
				bottom.x=elem.x;
				if(mat[bottom.x][bottom.y]=='0'){
					mat[bottom.x][bottom.y]='S';
					q.push(bottom);
					if(bottom.x==destx && bottom.y==desty){
						isDone=true;
						continue;
					}	
				}
			}
			steps=steps+1;
			if(q.empty()){
				cout<<"EMPTY"<<endl;
				break;
			}
			
		}
		
		stack<char> s;
		int cur_x=destx;
		int cur_y=desty;

		while(cur_x!=0 && cur_y!=0){
			if(mat[cur_x][cur_y]=='N'){
				s.push('N');
				cur_x=cur_x-steps;
			}
			if(mat[cur_x][cur_y]=='E'){
				s.push('E');
				cur_y=cur_y-steps;
			}
			if(mat[cur_x][cur_y]=='W'){
				s.push('W');
				cur_y=cur_y+steps;
			}
			if(mat[cur_x][cur_y]=='S'){
				s.push('S');
				cur_x=cur_x-steps;
			}
			steps=steps-1;
		}

		while(!s.empty()){
			cout<<s.top()<<" ";
			s.pop();
		}
		cout<<endl;
	}

}