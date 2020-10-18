




// //Hoisting : mechanism where variables and function declarations are moved to the top 
//         //of their scope before code execues


// console.log(someName);
// var somename="utkarsh";


// //var variables are hoisted to the top of their scope with their values as undefined 

// var someName=undefined;
// console.log(someName);
// someName="utkarsh";




// var name="Utkarsh";
// var age=35;

// if(age>30)
// {
//     var name="Rahul";
// }

// console.log(name);  //Rahul


//LET -> let is blocked scope 






// let someName="Utkarsh";
// let age=35;

// if(age>30)
// {
//     let someName="Rahul";
// }

// console.log(someName);  


console.log(somename)   //undefined 
var somename="Utkarsh";

function someFun() {
    console.log(somename)  //utkarsh
    var somename="Rahul"; 
    console.log(somename) //rahul
}

someFun();

  console.log(somename)  //rahul  


// var someName="utkarsh";

// if(true)
// {
//     var someName="Rahul";
//     console.log(someName);
// }
// console.log(someName);



// var someOne=undefined;
// someName="utkarsh";

// if(true)
// {
//     someName="Rahul";
//     console.log(someName);
// }

// console.log(someName);




