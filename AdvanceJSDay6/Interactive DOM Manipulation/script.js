document.addEventListener('DOMContentLoaded', () =>{
    const colorInput = document.getElementById('colorInput');
    const textInput = document.getElementById('textInput');
    const changeBackgroundBtn = document.getElementById('changeBackgroundBtn');
    const updateTextBtn = document.getElementById('updateTextBtn');
    const targetDiv = document.getElementById('targetDiv');

    // Event listener for "change Background" button

    changeBackgroundBtn.addEventListener('click', () =>{
        const color = colorInput.Value.trim();
       if(CSS.supports('background-color', color)){
        targetDiv.style.backgroundColor = color;
       }else{
        alert('Invalid color name!');
       }
    });

    // Event listener for "update Text" button
    updateTextBtn.addEventListener('click', ()=>{
        const text = textInput.Value.trim();
        if(text === ""){
            alert('please enter some text!');
        }else{
            targetDiv.textContent = text;
        }
    });
});


// document.getElementById('changeBackground').addEventListener('click', function() {
//     let color = document.getElementById('colorInput').value;
//     let div = document.getElementById('targetDiv');
//     if (CSS.supports('background-color', color)) {
//         div.style.backgroundColor = color;
//     } else {
//         alert('Invalid color name!');
//     }
// });

// document.getElementById('updateText').addEventListener('click', function() {
//     let text = document.getElementById('textInput').value;
//     let div = document.getElementById('targetDiv');
//     if (text.trim() === '') {
//         alert('Please enter some text!');
//     } else {
//         div.textContent = text;
//     }
// });