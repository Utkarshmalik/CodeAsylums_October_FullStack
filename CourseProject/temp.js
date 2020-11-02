
//   const call = {
//     caller: "mom", 
//     anotherCaller: function() {
//           console.log(`${this.caller} called, too!`)
//         },
//     says: function() {
//       console.log(`Hey, ${this.caller} just called.`);
//     }
//   };
  
//   let newCall = call.anotherCaller;
//   newCall();




  
 

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



//Objects 


//7 Types
// Number
// Strings
// Boolean
// null   
// undefined
// symbol  //es6 
// object : reference


// const obj={title:'Objects'};

// const firstName="utkarsh";
// const lastName="Malik";





// const course={};

// //ratings //stars //viewers //enrollments  //title  //rewards

// const input1Key="viewers"; 
// const input1Value=5;

// const input2Key="ratings";
// const input2Value=8;

// const input3Key="enrollments";
// const input3Value=10000;

// course[input1Key]=input1Value;

// course[input2Key]=input2Value;

// course[input3Key]=input3Value;


// console.log(course);

// course:{viewers:5,ratings:8}




// const obj={name:"scsc",age:"cdcd",frfrfL:"cdc"};
// obj.height=180;


// //order is sorted on the basis of key

// const obj2={3:"name",1:"ddede",4:"dede",0:"ddce"};
// console.log(obj2);

// const obj={info:{name:"Utkarsh"},"age":[{key:"cdc"}]};

// //spread operator 

// const obj2={...obj};
// obj2.info={...obj.info};

// for(let i=0;i<obj.age.length;i++)
//   obj2.age[i]={...obj.age[i]};


// console.log(obj);
// obj.info.name="Rahul";
// obj.age.push(5);
// console.log(obj2);

// const obj2=Object.assign(obj);

// console.log(obj);
// obj.info.name="Rahul";
// obj.age.push(5);
// console.log(obj2);


// const obj={height:25,info:{name:"Utkarsh"},"age":[{key:"cdc"}]};

// const height=obj.height;
// const info=obj.info;
// const name=info.name;
// const age=obj.age;

//destructing in objects 

// const {height,info}=obj;
// const {name}=info;

// console.log(height,name);


//destructing in arrays


// const arr1=[{name:"Utkars"},{name:'dcdede'}];

// const [person1,person2]=arr1;

// console.log(person1);
// console.log(person2);



//this keyword


//lexical environment
//execution context 
//scope chains

// const course={

//     name:"JS",

//     addCourse:function () {
//         var name='JS'
//         console.log(name);
//     }
// };

// course.addCourse();


//execution context :environment in which the code is executed
//value => this ,variables,objects,functions





// var someFunction=function() {
//     console.log(this);
// }

// 


// someFunction();



//This at object literals



// var someObj={};

// someObj.someMethod= function () {
//     console.log(this);
//  }

// someObj.someMethod();



// var fruit="apple";

// function getFruit(params) {
//     var fruit="banana";
//     console.log(fruit);        // banana
//     console.log(this);         //window
//     console.log(this.fruit);   //apple
// }

// getFruit();

// var name="Ut";
// var color="red";

// function getPerson() {
//     console.log(this.name + this.color);
// }

// var person ={
//     name:"Rahul",
//     color:"green",
//     getPerson:function getPerson() {
//     var name="fefe";
//     var color="yellow";
//     console.log(this.name + this.color);
//     }
// }

// getPerson()
// person.getPerson();


// this :points to the object , which the calling 
//function/method belongs to 

// var person=[
//     {name:"Utkarsh",fun:function (params) {
//     console.log(this);
// }}
// ];
// person[0].fun();

//this has different meanings when used at different places 




// const obj={

//     name:"Utkarsh",
//     calculaeBMI:()=>{
//         const name="Rahul";
//         console.log(name);
//         console.log(this);
//     }
// }

//static deals : with Where something was declared
//dynamic deals : with How somwthing will run 


// var fun=function() {
//     console.log(this); 
// }
// fun();



//this in object methods


// var obj={};

// obj.fun=function(){
   
//     return function () {
//         console.log(this);
//     }
// }

// const fun2=obj.fun();
// fun2();


//

// this in prototypes and constructor functions


// var myConstructor= function () {
//     this.someMethod=function () {
//         console.log(this);
//     }
// }

// var a= new myConstructor();
// a.someMethod();


//this in events 

// var element=document.querySelector("header");

// function onButtonClick() {
//     console.log(this);
// }

// element.addEventListener("click",onButtonClick);

// this in arrow functions 


// var obj={};

// function fun(){
//     console.log(this);
// }

// function fun2() {
//     'use strict';
//     console.log(this);
// }

// fun();
// fun2();



// var element=document.querySelector("header");

//  onButtonClick=()=>{
//     console.log(this);
// }

// element.addEventListener("click",onButtonClick);


// bind vs call vs apply 



// console.log(this);


// var name="Utkarsh";


// const person1={
//     name:"Rahul"
// }

// const person2={
//     name:"Rohit"
// }

// function tellMeAboutThePerson(age,height)
// {

//     console.log(this.name +age+height);
// }
// // tellMeAboutThePerson.call(person2,20,180);

// // tellMeAboutThePerson.apply(this,[20,180]);

// const newFun=tellMeAboutThePerson.bind(this,20,180);
// newFun();










// let hero = {
//     powerLevel: 99,
//     getPower(){
//       return this.powerLevel;
//     }
//   }

//   let getPower = hero.getPower;
  
//   let hero2 = {powerLevel:42};
//   console.log(getPower()); 
//   console.log(getPower.apply(hero2)); 
  
  
  
  // Code 2


//   function fun ()
//   {
//   const a = function(){
//     console.log(this); // window 
  
//     const b = {
//       func1: function(){
//         console.log(this); //b
//       }  
//     }
  
//     const c = {
//       func2: ()=>{
//         console.log(this); //c, window 
//       }
//     }
  
//     b.func1();
//     c.func2();
//   }
  
//   a();
// }
// fun();
  
  
  

  
//   const b = {
//     nameq:"Vivek",
//     f: function(){
//       var self = this;
//       console.log(this.nameq); //vivek
//       (function(){
//         console.log(this.nameq); //undefined 
//         console.log(self.nameq); //vivek,
//       })();
//     }
//   }
  
//   b.f();

// Questions:
// Questio
