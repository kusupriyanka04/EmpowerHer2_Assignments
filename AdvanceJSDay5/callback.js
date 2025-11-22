//Define the displayMessage function to output a greeting
function displayMessage(name){
    console.log(`Hello, ${name}!`);
}

//Define the getUserInput function that simulates fetching a username and calls displayMessage as a callback after 1 second
function getUserInput(callback){
    setTimeout(()=>{
        const userName = "riya";
        callback(userName);
    }, 1000);
}

getUserInput(displayMessage);