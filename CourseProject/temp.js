
// class course
// {
//   constructor(name,author,date,ratings)
//   {
//     this.name=name;
//     this.author=author;
//     this.date=date;
//     this.ratings=ratings;
//   }

//   render()
//   {
//     let newCourse=document.createElement('li');
//     newCourse.innerHTML=`
//     <div style="text-align:center;border:3px solid blue">
//     <h1>${this.name}</h1>
//     <h2>${this.author}</h2>
//     <h3>${this.date}</h3>
//     <h4>${this.ratings}</h4>
//     ${(this.price)?this.price:""}
//     </div>
//     `
//     return newCourse;
//   }

// }

function course(name,author,date,ratings)
{
  this.name=name;
  this.author=author;
  this.date=date;
  this.ratings=ratings;

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

const c1=new course("JS");
const c2=new course("React");

console.log(c1);
console.log(c2);


function SpecialCourse(name,author,date,ratings,price)
{
  course.call(this,name,author,date,ratings);
  this.price=price;
}


SpecialCourse.prototype=new course();
SpecialCourse.prototype.constructor=SpecialCourse;

const sc=new SpecialCourse();
console.log(sc.__proto__.__proto__.__proto__);


// class CourseList
// {
//    courses=[];

//   constructor(courses)
//   {
//     this.courses=[...courses]
//   }

//   addCourse(course)
//   {
//     this.courses.push(course);
//   }

//   removeCourse(courseId)
//   {
//     this.courses=this.courses.filter((course)=>
//     {
//       return course.id!==courseId;
//     });
//   }

// render()
// {

//   let courseListUI=document.createElement('ol');

//   console.log(this.courses);

//   this.courses.forEach( (course) => {
//     let courseUI=course.render();
//     console.log(courseUI);
//     courseListUI.appendChild(courseUI);
//   });

//   return courseListUI;
// }
// }



// class Application
// {
//    static init()
//   {

//     const course1=new course("JS","Utkarsh","10/10/20",5);
//     const course2=new course("React","Rahul","4/10/20",2);
//     const course3=new SpecialCourse("Nodejs","Rohit","3/10/20",4,500);


//      const courseList=new CourseList([course1,course2,course3]);
//      const courseListUI=courseList.render();
//      console.log(courseListUI);
//      const app=document.querySelector("#app");
//      app.appendChild(courseListUI);
//   }

// }

// Application.init();
