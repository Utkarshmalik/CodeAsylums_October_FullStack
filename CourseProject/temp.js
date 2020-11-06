


// const button=document.querySelector("#formSubmitButton");


// const buttonHandler=(event)=>{

//   event.preventDefault();

//   const field=document.querySelector("#name");
//   console.log(field.value);

//   button.removeEventListener("click",buttonHandler);
// }

// button.addEventListener("click",buttonHandler);


const box1=document.querySelector("#box1");
const box2=document.querySelector("#box2");
const box3=document.querySelector("#box3");




box1.addEventListener("click",(event)=>
{
  console.log("I am box 1");
},false);

box2.addEventListener("click",(event)=>
{
  console.log("I am box 2");
},true);


box3.addEventListener("click",(event)=>
{
  console.log("I am box 3");
},false);




