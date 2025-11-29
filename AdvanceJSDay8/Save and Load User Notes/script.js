// Get elements
const notesTextarea = document.getElementById('notes');
const saveNotesButton = document.getElementById('saveNotes');
const loadNotesButton = document.getElementById('loadNotes');
const clearNotesButton = document.getElementById('clearNotes');

// Key for localStorage
const NOTES_KEY = 'userNotes';

// Load notes on page load
window.onload = () => {
    const savedNotes = localStorage.getItem(NOTES_KEY);
    if (savedNotes !== null) {
        notesTextarea.value = savedNotes;
    }
};

// Save notes
saveNotesButton.addEventListener('click', () => {
    const notes = notesTextarea.value.trim();
    if (notes !== '') {
        localStorage.setItem(NOTES_KEY, notes);
        alert('Notes saved!');
    } else {
        alert('Cannot save empty notes.');
    }
});

// Load notes
loadNotesButton.addEventListener('click', () => {
    const savedNotes = localStorage.getItem(NOTES_KEY);
    if (savedNotes !== null) {
        notesTextarea.value = savedNotes;
    } else {
        alert('No notes found.');
    }
});

// Clear notes
clearNotesButton.addEventListener('click', () => {
    localStorage.removeItem(NOTES_KEY);
    notesTextarea.value = '';
    alert('Notes cleared!');
});