'use strict'


//var const and let => 



// Hoisting : mechanism where variables and function declarations are moved to the top 
//         of their scope before code executes




// console.log(someName);
// var someName="utkarsh";


// var undefined="true";




// console.log(someName);
// let someName="utkarsh";




// //var variables are hoisted to the top of their scope with their values as undefined 

// var someName=undefined;
// console.log(someName);
// someName="utkarsh";






// var somenName="Utkarsh";
// var age=35;

// if(age>30)
// {
//     var someName="Rahul";
// }

// console.log(someName); 




// var someName=undefined
// var age=undefined

// someName="Utkarsh";
// age=35;

// if(age>30)
// {
//     someName="Rahul";
// }

// console.log(someName);








//LET -> let is blocked scope


// let someName="Utkarsh";
// let age=35;

// if(age>30)
// {
//     let someName="Rahul";
// }

// console.log(someName);  




// // console.log(somename)   //undefined 

// let somename="Utkarsh";

// function someFun() {
//     console.log(somename)  
//      let somename="Rahul"; 
// }

// someFun();

//   console.log(somename) //  Utkarsh
  
  


//   var somename=undefined;
//   somename="Utkarsh";
//   function someFun()
//   {
//       somename=undefined;
//       console.log(somename);
//       somename="Rahul";
//       console.log(somename);
//   }
//   console.log(somename);








// var someName="utkarsh";

// if(true)
// {
//     var someName="Rahul";
//     console.log(someName); //rahul
// }
// console.log(someName);      //rahul



// var someOne=undefined;
// someName="utkarsh";

// if(true)
// {
//     someName="Rahul";
//     console.log(someName);
// }

// console.log(someName);



// var x=10;

// if(true)
// {
//     function fun() {
//         console.log(x);   //undefined
//         var x=30;
//         console.log(x);  //30
//     }

//     console.log(x);      //10, undefined

//     fun();

//     console.log(x);     //30, undefined
// }

// console.log(x);       //30, //undefined


// var x=undefined;
// x=10;

// if(true)
// {
//     function fun() {
//         var x=undefined;
//         console.log(x);
//         x=30;
//         console.log(x);
//     }

//     console.log(x);

//     fun();

//     console.log(x);
// }

// console.log(x);







// var x=10;
// if(true)
// {
//     function fun() {
//         var x=30;

//         if(x>10)
//         {
//             let x=40;
//             console.log(x);  //40
//         }

//         console.log(x);  //30
//     }

//     console.log(x);     //10

//     fun();

//     console.log(x);     //10
// }

// console.log(x);       //10


// var x=undefined;
// x=10;

// if(true)
// {
//     function fun() {
//         var x=undefined;
//         console.log(x);
//         x=30;
//         console.log(x);
//     }

//     console.log(x);

//     fun();

//     console.log(x);
// }

// console.log(x);


// var x=10;

// function fun() {

//     if(false)
//     {
//         var x=20;
//     }

//     console.log(x);  
//     console.log(y); //undefined 

//     var y=100;
//     console.log(y); //100
// }

// fun();

// let x=10;

// function fun() {

//     if(false)
//     {
//         let x=20;
//     }

//     console.log(x);  //error
//     console.log(y); //error
//     let y=100;
//     console.log(y);  //100
// }

// fun();



// function test()
// {
//     fun2=undefined;

//     fun1();
//     fun2();

//     function fun1() {
//         console.log("FUN1");
//     }

//     var fun2=  function() {
//         console.log("FUN2");
//     }
// }

// test();

// console.log(someName);   
// console.log(sayHi());

// function  sayHi() {
//     console.log("Hii"); 
//     return 5;  
// }

// var someName="Utkarsh";


// const mybook="Harry potter";

// function  myFav() {

//     console.log(mybook); 
//     let mybook="freedom";
//     console.log(mybook);  
// }

// myFav();


// console.log(name1);   //undefined

// if(true)
// {
//     console.log(name1);  //undefined
//     var name1="utkarsh";
// }


// console.log(name1);   //error

// if(true)
// {
//     console.log(name1);  //error
//     let name1="utkarsh";
// }



// console.log(name1);   //undefined

// if(true)
// {
//     console.log(name1);  //undefined
//     const name1="utkarsh";
// }



// 1)Numbers
// 2)Strings
// 3)Objects
// 4)Boolean 
// 5) null
// 6) undefined





//stacks 
//heaps
//heaps=> for storing / memory allocation




// let  a={name:"Utkarsh",age:25};
// let b={...a};

// if(a==b)
// {

// } 

// if(a===b)
// {

// }

// a.name="Rahul";

// console.log(a);
// console.log(b);


// const a=[];
// a.push(1);
// console.log(a);



//null vs undefined

//undefined means absenece of defination 
//null means 




//Functions

// function fun1(...numbers) {

//     console.log(numbers);

//     let sum=0;

//     for(const num of numbers)
//     {
//         sum+=num;
//     }

//     console.log(sum);
// }


// fun1(1,2,3,4,5,4,3);
// fun1(1,2,3);
// fun1(5,6,4,3,2,3,4,5,5,4,3);
// fun1(1);


//Rest operator
console.log(global);


























