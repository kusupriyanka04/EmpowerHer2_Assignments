// 18(a)
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
//console.log(x);

// 18(b)
const Uprofile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(Uprofile?.user?.details?.email);
console.log(Uprofile?.user?.details?.email?.phone);

//18(c)
const employee = {
    emname : "laya",
    branch : {
        department :" developer",
        id : 504
    } 
}
console.log(employee.contact.phone);
