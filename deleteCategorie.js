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
    
    const userCategories = JSON.parse(localStorage.getItem('userCategories')) || []
    const deletingCategorie = userCategories.filter((c) => finalDataOfSelect !== c.categoriaNombre)

    const categoriesJSON = JSON.stringify(deletingCategorie)
    localStorage.setItem('userCategories',categoriesJSON)
    $('#deleteOptionModal').modal('hide')
    displayCategories()
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
