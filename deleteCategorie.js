let dataOfWeirdSelect = ''
let buttonValidation
let finalDataOfSelect = ''
const deleteOptionForm = document.getElementById('deleteOptionForm')


function myFunction(value) {
    dataOfWeirdSelect = value
    if (buttonValidation === true){
        finalDataOfSelect = value
    }
}

function deleteCategorieButton() {
    buttonValidation = true
    myFunction(dataOfWeirdSelect)
    buttonValidation = false

    const usernotes = getNotes()

    const userCategories = JSON.parse(localStorage.getItem('userCategories')) || []
    const deletingCategorie = userCategories.filter((c) => finalDataOfSelect !== c.categoriaNombre)

    const deleteCategorieVal = usernotes.find((c) => c.noteSelect == finalDataOfSelect)
    if (deleteCategorieVal == undefined) {
        const categoriesJSON = JSON.stringify(deletingCategorie)
        localStorage.setItem('userCategories',categoriesJSON)
        $('#deleteOptionModal').modal('hide')
        displayCategories()
    } else {
        alert('no se pudo eliminar la categoria porque una nota la esta usando')
    }

    // for (let i = 0; i < usernotes.length; i++) {
    //     const note = usernotes[i];
    //     if (note.noteSelect === finalDataOfSelect) {
    //         alert('nope')
    //     } else {
    //         const categoriesJSON = JSON.stringify(deletingCategorie)
    //         localStorage.setItem('userCategories',categoriesJSON)
    //         $('#deleteOptionModal').modal('hide')
    //         displayCategories()
    //     }
    // }
}


function displayCategoriesInDelete() {
    const userCategories = JSON.parse(localStorage.getItem('userCategories')) || []
    const categories = []
    for (let i = 0; i < userCategories.length; i++) {
        const categorie = userCategories[i];
        const input = `
        <input type="radio" name="browser" onclick="myFunction(this.value)" value="${categorie.categoriaNombre}">${categorie.categoriaNombre}<br>
        `
        categories.push(input)
    }
    deleteOptionForm.innerHTML = categories.join('')
}
