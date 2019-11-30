let a=[1,3,4,5,7,9,8,9,87]
console.log(a)
let x,i;
let n=a.length           //set the limit of ittration by n
let j=0
x=a[n-1]                // the starting element is the set to x
function sft2()
{
    for (i=n-1; i>=1; i--)
   {
       a[i]=a[i-1]
   }
   a[0]=x;     //the first index is changes by the last element w/c is x=a[n-1]
   for (i=0; i<a.length;i++)
   return a
   }
console.log(sft2())
console.log(`<><><><><><><><><><><><><><><><><><><><><>`)
let k=3     //here set the number of shift 
while(j<k){   //loop the function k-1 times and console the shifted array 
function sft()
{
   x=a[n-1];
   for (i=n-1; i>=1; i--)
   {
    a[i]=a[i-1]
   }
    a[0]=x;
   for (i=0; i<a.length;i++) 
return a
}
   console.log(sft())
     j++
}



