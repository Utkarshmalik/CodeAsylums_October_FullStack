const addCourseButton=document.querySelector("#addCourseButton");
const addMovieModal=document.querySelector("#course_modal");
const backDrop=document.querySelector("#backdrop");
const inputs=document.querySelectorAll("#modal_inputs input");


const cancelCourseButton=document.querySelector("#modal_controls .btn-passive");




function clearInputs()
{
    inputs[0].value="";
    inputs[1].value="";
    inputs[2].value="";   
}

function onBackDropClick()
{
    addMovieModal.classList.toggle("visible");
    backDrop.classList.toggle("visible");
    clearInputs();

}


addCourseButton.addEventListener("click",()=>
{
    onBackDropClick()   
})


backDrop.addEventListener("click",()=>
{
    onBackDropClick()
})

cancelCourseButton.addEventListener("click",()=>
{
    onBackDropClick();
})

