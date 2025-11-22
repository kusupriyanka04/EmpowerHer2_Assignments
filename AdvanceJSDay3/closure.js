
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
