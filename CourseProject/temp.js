
 const usersList=document.querySelector("#users");
 
 
 const user={name:"Utarsh"};

 console.log(user);

 const jsonUser=JSON.stringify(user);

console.log(jsonUser);
const newUser=JSON.parse(jsonUser);

 console.log(newUser);
 


async function  asyncFun(url)
{
    const users= await fetch(url,{headers:{"app-id":"5faaaa43b9885c692283f61f"}});
    return users.json();

}

asyncFun("https://dummyapi.io/data/api/user")
.then(data=>
    {
        const users=data.data;

        users.forEach(user => {

            console.log(user);
            var newUser=document.createElement('ol');
            newUser.innerHTML=` <div style="padding:10px;margin:10px;border:3px solid black;" >
            <img src=${user.picture} height=100px width=100px />
            <p>
            The user is ${user.firstName} ${user.lastName} and my email id is ${user.email}
            </p>
            </div>
            `
            usersList.appendChild(newUser)
    
        });

    }
);



