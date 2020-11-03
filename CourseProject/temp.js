
class attribute
{
  constructor(name,value)
  {
    this.name=name;
    this.value=value;
  }
}


class Component
{
  createAndAppendElement(tag,className,attributes=[],id)
  {
    let newElement=document.createElement(tag);

    if(className)
    newElement.className=className;

    console.log(attributes);

    for(let i=0;i<attributes.length;i++)
    {
    
      newElement[attributes[i].name]=attributes[i].value;
    }

    let targetId=document.getElementById(id);
    console.log(id);
    targetId.appendChild(newElement);

    return newElement;
  }
}

class course extends Component 
{
  constructor(name,author,date,ratings)
  {
    super();

    this.name=name;
    this.author=author;
    this.date=date;
    this.ratings=ratings;
  }

  render()
  {
    let newCourse=this.createAndAppendElement('li','',[],'courseList');


    newCourse.innerHTML=`
    <div style="text-align:center;border:3px solid blue">
    <h1>${this.name}</h1>
    <h2>${this.author}</h2>
    <h3>${this.date}</h3>
    <h4>${this.ratings}</h4>
    ${(this.price)?this.price:""}
    </div>
    `
  }
}


class SpecialCourse extends course
{
  constructor(name,author,date,ratings,price)
  {
    super(name,author,date,ratings);
    this.price=price;
  }
}

class CourseList extends Component
{
   courses=[];

  constructor(courses)
  {
    super();
    this.courses=[...courses]
  }

  addCourse(course)
  {
    this.courses.push(course);
  }

  removeCourse(courseId)
  {
    this.courses=this.courses.filter((course)=>
    {
      return course.id!==courseId;
    });
  }

  render()
  {
    
    let courseListUI=this.createAndAppendElement('ol','',[new attribute("id","courseList")],'app');
    console.log(courseListUI);

    this.courses.forEach( (course) => {
      course.render();

    });

  }
}


class Application
{
  static init()
  {

    const course1=new course("JS","Utkarsh","10/10/20",5);
    const course2=new course("React","Rahul","4/10/20",2);
    const course3=new SpecialCourse("Nodejs","Rohit","3/10/20",4,500);


     const courseList=new CourseList([course1,course2,course3]);
     courseList.render();
    //  console.log(courseListUI);
    //  const app=document.querySelector("#app");
    //  app.appendChild(courseListUI);
  }

}

Application.init();










