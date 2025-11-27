let countdown;
let remainingTime = 10; // default countdown time in seconds

console.log(`Starting countdown from ${remainingTime} seconds`);

countdown = setInterval(() => {
  console.log(`Remaining time: ${remainingTime} seconds`);
  remainingTime--;
  if (remainingTime < 0) {
    clearInterval(countdown);
    console.log('Countdown Complete!');
    Process.exit();
  }
}, 1000);

//Stop countdown if 's' is pressed
// document.addEventListener('keydown', (event) => {
//   if (event.key.toLowerCase() === 's') {
//     if (countdown) {
//       clearInterval(countdown);
//       console.log('Countdown stopped!');
//     }
//   }
// });
