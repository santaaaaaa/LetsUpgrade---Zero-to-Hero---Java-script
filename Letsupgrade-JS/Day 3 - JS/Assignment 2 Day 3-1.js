//Question 1
//Fizz Buzz problem

var n3,n5,n15;
n3=Math.floor(100/3);
n5=Math.floor(100/3);
n15=Math.floor(100/3);
var i,j,k,three=[],five=[],fifteen=[];
for(i=0;i<n3;i++){
    three[i]=(i+1)*3;
}
for(j=0;j<n5;j++){
    five[j]=(j+1)*5;
}
for(k=0;k<n15;k++){
    fifteen[k]=(k+1)*15;
}
var p,q,r,s,key,z="";
for(p=1;p<=100;p++)
{
    key=p;
    z=key.toString(10);
    for(q=0;q<n3;q++){
        if(key==three[q]){
            z="Fizz";
        }
    }
    for(s=0;s<n5;s++){
        if(key==five[s]){
            z="Buzz";
        }
    }
    for(r=0;r<n15;r++){
        if(key==fifteen[r]){
            z="FizzBuzz";
        } 
    }
    console.log(z);
}