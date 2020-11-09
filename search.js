const searchForm = document.getElementById('searchForm')
const searchInput = document.getElementById('searchInput')

let timeOut;
searchInput.oninput = () => {
    clearTimeout(timeOut);
    timeOut =setTimeout(() => {
        const usersNotes = getNotes()
        const term = searchInput.value;
        const filteredNotes = usersNotes.filter(n => (
            n.noteName.toLowerCase().includes(term.toLowerCase()) 
            || n.noteTextarea.toLowerCase().includes(term.toLowerCase())
        ))
        displayNotes(filteredNotes)
    }, 1500)


}

