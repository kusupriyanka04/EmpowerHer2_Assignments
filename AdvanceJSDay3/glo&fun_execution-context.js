let age = 21;

function displayAge(){
    console.log(age);
}

function changeAge(newAge){
     age = newAge;
     console.log(age);
}

displayAge();
changeAge(22);
displayAge();