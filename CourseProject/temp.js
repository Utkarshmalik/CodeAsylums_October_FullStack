function course(name,author,date,ratings)
{
    this.name=name;
    this.author=author;
    this.date=date;
    this.ratings=ratings;
}


course.prototype.add=function() {
  console.log("add"); 
}

course.prototype.render=function()
{
  let newCourse=document.createElement('li');
  newCourse.innerHTML=`
  <div style="text-align:center;border:3px solid blue">
  <h1>${this.name}</h1>
  <h2>${this.author}</h2>
  <h3>${this.date}</h3>
  <h4>${this.ratings}</h4>
  ${(this.price)?this.price:""}
  </div>
  `
  return newCourse;
}



function specialCourse(name,author,date,ratings,price) {

  course.call(this,name,author,date,ratings);
  this.price=price;
}

specialCourse.prototype=new course();
specialCourse.prototype.constructor=specialCourse;



const course1=new specialCourse("JS","Utkarsh","10/10/10",5,600);
const course2=new course("JS","Utkarsh","10/10/10",5);
console.log(course1);
console.log(course2);


function courseList(courses=[]) {

  this.courses=[...courses]
}

courseList.prototype.addCourse=function(course)
{
    this.courses.push(course);
}

courseList.prototype.render= function()
{
  let courseListUI=document.createElement('ol');

    console.log(this.courses);

    this.courses.forEach( (course) => {
      let courseUI=course.render();
      console.log(courseUI);
      courseListUI.appendChild(courseUI);
    });

    return courseListUI;
}


function init()
  {

    const course1=new course("JS","Utkarsh","10/10/20",5);
    const course2=new course("React","Rahul","4/10/20",2);
    const course3=new specialCourse("Nodejs","Rohit","3/10/20",4,500);
    const courseListNew=new courseList([course1,course2,course3]);
     const courseListUI=courseListNew.render();
     console.log(courseListUI);
     const app=document.querySelector("#app");
     app.appendChild(courseListUI);
  }



init();










