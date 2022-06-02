var database=[
    {
        username:"Aditya",
        password:"9919276694"
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
    }
];

var usernamePrompt=prompt("What's your username?");
var passwordPrompt=prompt("What's your password");

function signIn(user,pass){
    if(user===database[0].username&&pass===database[0].password){
        console.log(newsFeed);
    } else{
        alert("Sorry,wrong username and password!");
    }
}
signIn(usernamePrompt,passwordPrompt);