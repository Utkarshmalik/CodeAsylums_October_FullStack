#include<iostream>
using namespace std;
#include<bits/stdc++.h>

int getMinMoves(int i,int j,int n,int m,int ** mat,int ** dp)
{
    if(i==n-1 && j==m-1)
    return 0;

    if(i<0 || j<0 || i>=n || j>=m)
    return -1;

    if(dp[i][j]!=-2)
    return dp[i][j];

    int ans1=getMinMoves(i+mat[i][j],j,n,m,mat,dp);
    int ans2=getMinMoves(i,j+mat[i][j],n,m,mat,dp);

    if(ans1==-1 && ans2==-1)
    return dp[i][j]=-1;

    if(ans1==-1)
    return dp[i][j]=1+ans2;

    if(ans2==-1)
    return dp[i][j]=1+ans1;

    return dp[i][j]=1+min(ans1,ans2);
}

int main()
{
    int t;
    cin>>t;

    while(t--)
    {
        int n,m;
        cin>>n>>m;

        int ** mat=new int*[n];
        for(int i=0;i<n;i++)
        mat[i]=new int[m];


           for(int i=0;i<n;i++)
        {
            for(int j=0;j<m;j++)
            {
                cin>>mat[i][j];
            }
        }



        int ** dp=new int*[n];
        for(int i=0;i<n;i++)
        dp[i]=new int[m];


             for(int i=0;i<n;i++)
        {
            for(int j=0;j<m;j++)
            {
                dp[i][j]=-2;
            }
        }

        

        int ans=getMinMoves(0,0,n,m,mat,dp);

        cout<<ans<<"\n";

    }
}
