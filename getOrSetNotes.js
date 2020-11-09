// function getNotes() {
//     const usersNotes = JSON.parse(localStorage.getItem('usersNotes')) || [];
//     return usersNotes
// }

const getNotes = () => (JSON.parse(localStorage.getItem('usersNotes')) || []);


// -----------------------

function setNotes (usersNotes) {
    const usersNotesJson = JSON.stringify(usersNotes);
    localStorage.setItem('usersNotes',usersNotesJson);
}
