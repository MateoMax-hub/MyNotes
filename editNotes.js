const editNoteForm = document.getElementById('editNoteForm')
const editNoteSelect = document.getElementById('editNoteSelect')
const editNoteName = document.getElementById('editNoteName')
const editNoteTextarea = document.getElementById('editNoteTextarea')
var editingNoteId = ''


function displayEditModal(noteId) {
    $('#editNoteModal').modal('show')


    const usersNotes = JSON.parse(localStorage.getItem('usersNotes')) || [];
    const editNotes = usersNotes.filter(n => n.id == noteId)

    var noteName = editNotes[0].noteName
    var noteSelect = editNotes[0].noteSelect
    var noteTextarea = editNotes[0].noteTextarea

    editNoteName.value = noteName
    editNoteSelect.value = noteSelect
    editNoteTextarea.value = noteTextarea

    editingNoteId = noteId
    
}

editNoteForm.onsubmit = (e) => {
    e.preventDefault()
    const newName = editNoteName.value
    const newSelect = editNoteSelect.value
    const newTextarea = editNoteTextarea.value

    const usersNotes = JSON.parse(localStorage.getItem('usersNotes')) || [];
    const editNotes = usersNotes.map((n) => {
        if (editingNoteId === n.id) {
            const userNote = {
                ...n,
                noteName: newName,
                noteSelect: newSelect,
                noteTextarea: newTextarea
            }
            return userNote
        } else {
            return n
        }
    })

    const editedNote = JSON.stringify(editNotes)
    localStorage.setItem('usersNotes',editedNote)
    $('#editNoteModal').modal('hide')
    createInfoModals()
    displayAllNotes()
}

function deleteUser(noteId) {
    const usersNotes = JSON.parse(localStorage.getItem('usersNotes')) || [];
    const deletingNote = usersNotes.filter ((n) => noteId !== n.id) 

    const noteThatStay = JSON.stringify(deletingNote)
    localStorage.setItem('usersNotes',noteThatStay)
    createInfoModals()
    displayAllNotes()
}