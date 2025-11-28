function addItem(){
    const ul = document.querySelector("ul");

    const newItem = document.createElement("li");
    newItem.textContent = "New Item";

    const sequenceNumber = ul.children.length + 1;

    if(sequenceNumber % 2 ===1){
        newItem.style.fontWeight = 'bold';
        newItem.style.color = 'blue';
    }else{
        newItem.style.fontStyle = 'italic';
        newItem.style.color = 'red';
    }
    ul.appendChild(newItem);
}