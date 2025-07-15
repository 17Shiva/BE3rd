let users= [
    {
        id:1,
        name:"vansh",
        age:"24"
    },
    {
        id:2,
        name:"Ritik",
        age:19
    },
    {
        id:3,
        name:"Ritik",
        age:16
    }
]


function isAllowed(id){
    // id ka user
    let user = users.find(u => u.id ==id);
        if (!user) {
        console.log("User not found");
        return;
    }

        if(user.age >= 18){
            console.log(user.name)
            console.log("valid for voting")
       
        }
        else{
             console.log("Not valid")
        }
    
   
}

function isAllowedfor(id){
for(let i=0;i<users.length;i++){
    if(users[i].id==id){
        if(users[i].age>=18){
            console.log("Allowed for voting")
        }else{
            console.log("Not allowed for voting")
        }
    }
}
   
}
function promiseAllowed(id){
    return new Promise((resolve,reject)=>{
        let user = users.find((u) =>{
            return u.id==id;
        })
        console.log(user);
        if(!user) return reject("No user found")
            if(user.age<18) return  reject ("Age is less");
        return resolve("Eligible to vote ");
    })
}promiseAllowed(3).then((data)=>{
    console.log(data)
})
.catch((err=>{
    console.log(err);
}))




isAllowed(2);
isAllowedfor(2);