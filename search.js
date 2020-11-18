const searchForm = document.getElementById('searchForm')
const searchInput = document.getElementById('searchInput')
const categoriesFilterr = document.getElementById('categoriesFilter')

searchForm.onsubmit = (e) => {
    e.preventDefault()
}

const selectElement = document.querySelector('.searchingForm');

selectElement.addEventListener('input', (event) => {
    // const resultado = document.querySelector('.resultado');
    // resultado.textContent = `Te gusta el sabor ${event.target.value}`;
    if (categoriesFilterr.value !== 'categoria' && searchInput.value !== '' && categoriesFilterr.value !== 'CREAR CATEGORIA' && categoriesFilterr.value !== 'ELIMINAR CATEGORIA'|| categoriesFilterr.value !== '' && searchInput.value !== '' && categoriesFilterr.value !== 'CREAR CATEGORIA' && categoriesFilterr.value !== 'ELIMINAR CATEGORIA') {
            const usersNotes = getNotes()
            console.log('if')
            const term = searchInput.value;
            const termC = categoriesFilterr.value
            const filteredNotes = usersNotes.filter(n => (
                n.noteName.toLowerCase().includes(term.toLowerCase()) && n.noteSelect.includes(termC)
                || n.noteTextarea.toLowerCase().includes(term.toLowerCase()) && n.noteSelect.includes(termC)
            ))
            displayNotes(filteredNotes)
        
    }else if(searchInput.value !== '' ){
        console.log('hif')

            const usersNotes = getNotes()
            const term = searchInput.value;
            const filteredNotes = usersNotes.filter(n => (
                n.noteName.toLowerCase().includes(term.toLowerCase()) 
                || n.noteTextarea.toLowerCase().includes(term.toLowerCase())
            ))
            displayNotes(filteredNotes)
        
    }else if(categoriesFilterr.value !== 'categoria' && categoriesFilterr.value !== 'CREAR CATEGORIA' && categoriesFilterr.value !== 'ELIMINAR CATEGORIA' && searchInput.value !== '' || categoriesFilterr.value !== '' && categoriesFilterr.value !== 'CREAR CATEGORIA' && categoriesFilterr.value !== 'ELIMINAR CATEGORIA' && searchInput.value !== '' || categoriesFilterr.value !== '' && categoriesFilterr.value !== 'CREAR CATEGORIA' && categoriesFilterr.value !== 'ELIMINAR CATEGORIA' && searchInput.value == '' ){
        console.log('hifelse')
    
        const notes = getNotes()
        const termC = categoriesFilterr.value
        const filteredNotesC = notes.filter((n) => (n.noteSelect == termC))
        displayNotes(filteredNotesC)
    }else if (searchInput.value == '' ) {
        console.log('hifelseelse')
        
        displayAllNotes()
    
    }

});



function limpiarFiltros(e) {
    // e.preventDefault()
    searchForm.reset()
    displayAllNotes()
}