function logLoading(){
    console.log("Loading...");
}
// set interval to log "Loading..." every 1 second
let intervalId = setInterval(logLoading, 1000);

//stop loading after 5 seconds and log "Loaded successfully!"
setTimeout(()=>{
    clearInterval(intervalId);
    console.log("Loaded successfully!")
},5000);