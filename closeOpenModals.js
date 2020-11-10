function closeAddCategorieModal() {

    $('#addOptionModal').modal('hide')
    addOptionForm.reset()
    if (addNoteSelect.value === 'CREAR CATEGORIA') {
        // DISABLEPUTO.setAttribute('available', '')
        // console.log("closeAddCategorieModal -> DISABLEPUTO", DISABLEPUTO)
        addNoteSelect.value = 'categoria'
    }
    if (categoriesFilterr.value === 'CREAR CATEGORIA') {
        categoriesFilterr.value = 'categoria'
    }
    if (editNoteSelect.value === 'CREAR CATEGORIA') {
        editNoteSelect.value = modalSelectVal
    }
}
function closeAddNotesModal() {
    $('#addNoteModal').modal('hide')
    addNoteForm.reset()

}

function openAddModal() {
    addNoteForm.reset()
    $('#addNoteModal').modal('show')
}

function deleteCategorieModalClose() {
    $('#deleteOptionModal').modal('hide')
    if (addNoteSelect.value === 'ELIMINAR CATEGORIA') {
        // DISABLEPUTO.setAttribute('available', '')
        // console.log("closeAddCategorieModal -> DISABLEPUTO", DISABLEPUTO)
        addNoteSelect.value = 'categoria'
    }    
    if (categoriesFilterr.value === 'ELIMINAR CATEGORIA') {
        categoriesFilterr.value = 'categoria'
    }
    if (editNoteSelect.value === 'ELIMINAR CATEGORIA') {
        editNoteSelect.value = modalSelectVal
    }
}