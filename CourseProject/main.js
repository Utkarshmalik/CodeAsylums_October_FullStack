// const addCourseButton=document.querySelector("#addCourseButton");
// const addMovieModal=document.querySelector("#course_modal");
// const backDrop=document.querySelector("#backdrop");
// const inputs=document.querySelectorAll("#modal_inputs input");
// const cancelCourseButton=document.querySelector("#modal_controls .btn-passive");
// const addCourseConfirmButton=document.querySelector("#modal_controls .btn-danger");




// function clearInputs()
// {
//     inputs[0].value="";
//     inputs[1].value="";
//     inputs[2].value="";   
// }

// function onBackDropClick()
// {
//     addMovieModal.classList.toggle("visible");
//     backDrop.classList.toggle("visible");
//     clearInputs();

// }


// addCourseButton.addEventListener("click",()=>
// {
//     onBackDropClick()   
// })


// backDrop.addEventListener("click",()=>
// {
//     onBackDropClick()
// })

// cancelCourseButton.addEventListener("click",()=>
// {
//     onBackDropClick();
// })


// const allCourseList=[];


// function  renderNewCourse(newCourse) {

//     const courseList=document.querySelector("main ul");
//     const newLi=document.createElement("ol");

//     const {id,courseName,courseImage,courseRatings}=newCourse;
    
//     newLi.addEventListener("click",()=>
//     {
//         let indexValue=null;

//         for(let i=0;i<allCourseList.length;i++)
//         {
//             if(allCourseList[i].id===newCourse.id)
//             {
//                 indexValue=i;
//                 break;
//             }
//         }

//         console.log(allCourseList);

//         allCourseList.splice(indexValue,1);

//         courseList.children[indexValue].remove();

//     })

//    newLi.innerHTML=`
//     <div class="course_item card" >

//     <div>
//     <img src=${courseImage} />
//     </div>

//     <div>
//     <h1> ${courseName} </h1>
//     <h3> ${courseRatings}/5
//     </div>
//     </div>
//     `

//     courseList.appendChild(newLi);
// }


// addCourseConfirmButton.addEventListener("click",()=>
// {
//     const courseName=inputs[0].value;
//     const courseImage=inputs[1].value;
//     const courseRatings=inputs[2].value;
//     const newCourse={id:Math.random().toString(),courseName,courseImage,courseRatings};
//     allCourseList.push(newCourse);
//     onBackDropClick();
//     renderNewCourse(newCourse);

// })


//Event delegation


// const form=document.querySelector("#form");

// form.addEventListener("keyup",(e)=>
// {
//     console.log(e.target.dataset);

//     if(e.target.dataset.uppercase !=undefined)
//     e.target.value=e.target.value.toUpperCase();
// })


//setimeout and setInterval

// const id=setInterval(() => {

//     console.log("Hii");
// },2000);

// const btn=document.querySelector("#someButton");

// btn.addEventListener("click",()=>
// {
//     clearInterval(id);

// })




//Every function in jS is a Closure 


// function grandFather(params) {

//     const a=5;

//     return function father()
//     {
//         //a   

//         const b=6;

//         return function child(c)
//         {
//             //a,b

//         return a+b+c;
//         }
//     }
// }


// //someday

// const father=grandFather();


// ///1000 years 

// const child=father();


// ///1000

// console.log(child(10));


// //CLOSURE -> is a box that contains all the variables of lexical enviroment


// //concept : var vs let 

// for(var i=0;i<5;i++)
// {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);    
// }

// for(let i=0;i<5;i++)
// {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);    
// }

//Promises

//resolve is the function that runs after the asyncrous task is successful 
//reject is the function we run after 

// let promise1= new Promise((resolve,reject)=>
// {
//     console.log('Initial');

//     reject();
// });


// promise1.then(()=>
// {
//     console.log("does something");
// })
// .catch(()=>
// {
//     console.log("some error ocuured");
// })
// .then(()=>
// {
//     console.log("Enter here everytime");
// })



// function callSomeAPI(url)
// {
//     const promise=fetch(url);

//     promise.then((response)=>
//     {
//         if(response.status===200){
//             console.log("API call successful");
//             console.log(response.body);
//         }

//     })
//     .catch((error)=>
//     {
//         console.log(error);
//     })
// }

// callSomeAPI("https://dog.ceo/api/breeds/image/random");



//userlogin 
//fetch friends 
//fetch comments





// //async functions

// function someFun()
// {
//     return new Promise((resolve,reject)=>
//     {
//         var someNumber= (Math.floor(Math.random()*100))%2;

//         if(someNumber===0)
//         {
//             setTimeout(() => {
//                 resolve("Number is even")
//             }, 3000);
//         }
//         else{
//             setTimeout(() => {
//                 reject("Number is odd")
//             }, 4000);
//         }

//     })
// }

// async function someAsyncFunction()
// {
//     const result=await someFun();
//     console.log(result);
// }

// someAsyncFunction();



// async function getData(url) {

//     const response=await fetch(url);
//     return response;
// }

// getData('https://jsonplaceholder.typicode.com/todos/1').then(data=>data.json())
// .then(data=>console.log(data));



// async function someFun() {

//     return greeting=await Promise.resolve("hello");
// }

// someFun().then(alert);

// someFun();


function someFun()
{
    return new Promise((res,reject)=>
    {
        setTimeout(() => {
            res("data to be resolved ");
        }, 2000);
    })
}


async function asyncFun() {

    const result=await someFun();
    console.log(result);
}

asyncFun();