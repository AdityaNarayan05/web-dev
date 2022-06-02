var database=[
    {
        username:"Aditya",
        password:"9919276694"
    },
    {
        username:"sally",
        password:"123"
    },
    {
        username:"Mr.X",
        password:"xyz"
    }

];
var newsFeed=[
    {
        username:"Mohi",
        timeline:"I love coding"
    },
    {
        username:"Aj",
        timeline:"javascript is little tricky to understand"
    },
    {
        username:"Sally",
        timeline:"javascript is preety cool!"
    }
];

function isUserValid(username,password){
    for(var i=0;i<database.length;i++){
        if(username===database[i].username&&password===database[i].password){
            return true;
        }
    }
    return false;
}

function signIn(user,pass){
    console.log(isUserValid(user,pass));
    //if(user===database[0].username&&pass===database[0].password){
    //    console.log(newsFeed);
    //} else{
    //    alert("Sorry,wrong username and password!");
    //}
}

var usernamePrompt=prompt("What's your username?");
var passwordPrompt=prompt("What's your password");
signIn(usernamePrompt,passwordPrompt);