// Get references to the buttons and the paragraph container
const addParagraphButton = document.getElementById('add-Paragraph');
const removeParagraphButton = document.getElementById('remove-Paragraph');
const paragraphContainer = document.getElementById('paragraphContainer');

// Add event listener to the "Add Paragraph" button
addParagraphButton.addEventListener('click', ()=>{
   // Create a new paragraph element
    const newParagraph = document.createElement('p');
   // Set the text of the paragraph
    newParagraph.textContent = "This is a new paragraph.";
   // Append the paragraph to the container
    paragraphContainer.appendChild(newParagraph);
});

// Add event listener to the "Remove Last Paragraph" button
removeParagraphButton.addEventListener('click', ()=>{
  // Check if there are any paragraphs to remove
    if (paragraphContainer.lastChild){
       // Remove the last child from the container
        paragraphContainer.removeChild(paragraphContainer.lastChild);
    }
});