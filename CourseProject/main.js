const addCourseButton=document.querySelector("#addCourseButton");
const addMovieModal=document.querySelector("#course_modal");
const backDrop=document.querySelector("#backdrop");
const inputs=document.querySelectorAll("#modal_inputs input");
const cancelCourseButton=document.querySelector("#modal_controls .btn-passive");
const addCourseConfirmButton=document.querySelector("#modal_controls .btn-danger");




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


const allCourseList=[];


function  renderNewCourse(newCourse) {

    const courseList=document.querySelector("main ul");
    const newLi=document.createElement("ol");

    const {id,courseName,courseImage,courseRatings}=newCourse;
    
    newLi.addEventListener("click",()=>
    {
        let indexValue=null;

        for(let i=0;i<allCourseList.length;i++)
        {
            if(allCourseList[i].id===newCourse.id)
            {
                indexValue=i;
                break;
            }
        }

        console.log(allCourseList);

        allCourseList.splice(indexValue,1);

        courseList.children[indexValue].remove();

    })

   newLi.innerHTML=`
    <div class="course_item card" >

    <div>
    <img src=${courseImage} />
    </div>

    <div>
    <h1> ${courseName} </h1>
    <h3> ${courseRatings}/5
    </div>
    </div>
    `

    courseList.appendChild(newLi);
}


addCourseConfirmButton.addEventListener("click",()=>
{
    const courseName=inputs[0].value;
    const courseImage=inputs[1].value;
    const courseRatings=inputs[2].value;
    const newCourse={id:Math.random().toString(),courseName,courseImage,courseRatings};
    allCourseList.push(newCourse);
    onBackDropClick();
    renderNewCourse(newCourse);

})

