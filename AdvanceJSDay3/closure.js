
function createCounter(){
    let count = 0;
    return{
       increment: function(){
    //let count = 0;
    count++;
    console.log(`Current count: ${count}`);
    },
     decrement: function(){
    //let count = 0;
    count--;
    console.log(`Current count: ${count}`);
   }
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();

console.log("---------------------------------")
// Question2 : Simulating Private Variable with Closures

function createBankAccount() {
  let balance = 0;
  let transactionHistory = [];

  return {
    deposit: function(amount) {
      balance += amount;
      transactionHistory.push(`Deposited: ${amount}`);
      console.log(`Deposited: ${amount}`);
    },
    withdraw: function(amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
      } else {
        balance -= amount;
        transactionHistory.push(`Withdrawn: ${amount}`);
        console.log(`Withdrawn: ${amount}`);
      }
    },
    balance: function() {
      console.log(balance);
    },
    transactionHistory: function() {
      console.log(transactionHistory);
    }
  };
}

const account = createBankAccount();
account.deposit(500); 
account.withdraw(200); 
account.withdraw(400); 
account.balance(); 
account.transactionHistory();