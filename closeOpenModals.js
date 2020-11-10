function closeAddCategorieModal() {
    $('#addOptionModal').modal('hide')
    addOptionForm.reset()
}
function closeAddNotesModal() {
    $('#addNoteModal').modal('hide')
    addNoteForm.reset()
}

function openAddModal() {
    addNoteForm.reset()
    $('#addNoteModal').modal('show')
}