



// arr.push(34.56);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift(39.5);
// console.log(arr);

// var arr=[1,22.5,10.5,34.6,44.7];

// arr.splice(1,2,3,4,5,6);
// 1 --slice-- 2,3,--slice--4,5,6
//slice never changes the original
//it returns a new array
// 39.5,--cut-- 3, 4,--cut--5, 6, 34.6, 44.7
// const arr1=arr.slice(1,3);
// console.log(arr1);

//copying objects in JS 




//shallow copying

// const arr(1900)=[1902,1904,1906,1908];

// const arr1=arr.slice();

// arr1(1910)=[1902,1904,1906,1908];


// //deep copying 

// const arr(1900)=[1902,1904,1906,1908];

// arr1(1910)=[1912,1914,1916,1918];

// const arr=[{name:"Utkarsh",details:{age:24}},{name:"Rahul"},{name:"Raman"}];


// const arr1=arr.slice();

// for(let i=0;i<arr.length;i++)
// {
//     arr1[i]={...arr[i]};
//     arr1[i].details={...arr[i].details};
// }


// arr1[0].details.age=26;
// console.log(arr); 
// console.log(arr1);


//shallow copying vs deep copying 

// const arr=["fruit","vegetable","animal","vegetable","vegetable"];
// // const arr1=arr.concat([6,7,8,9]);

// // arr.push(5);
// // console.log(arr);
// // console.log(arr1);

// console.log(arr.lastIndexOf("vegetable"));


// console.log(arr1);


// for(let i=0;i<arr1.length;i++)
//  arr1[i]=5*arr1[i];

// console.log(arr1)

//forEach

// arr1.forEach((value,index,array)=>{
//     arr1[index]=value*5;
// } );

// console.log(arr1);


//map => actually returns the new array 

// const arr2=arr1.map((value,index)=>
// {
//     return value*5;
// })

// console.log(arr2);



// const sum=arr1.reduce((prevValue,currValue,currIndex,array)=>
// {
//     return prevValue+currValue;
// },0);


// //intially 
// prevValue=0;

// // firstIteration
// prevValue=0;
// currvalue=1;
// return 1;

// //second iteration
// prevValue=1;
// currValue=2;
// return 3;

// // firstIteration
// prevValue=0;
// currvalue=1;
// return 1;

// //sixth iteration
// prevValue=15;
// currValue=6;
// return 21;


// const arr1=[1,2,3,4,5,6,7,8,9,9];


// const arr2=arr1.filter((value,index)=>
// {
//     return value>=5;
// });

// console.log(arr2);

//    const sum=arr1.map((value,index)=>(index+1)*value).reduce((prev,curr)=>prev+curr,0);
//    console.log(sum);


//forEach,for
//map,filter=>returns new array
//reduce => returns a value


//reduce



