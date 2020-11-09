const addOption = document.getElementById('addOption')
const addOptionForm = document.getElementById('addOptionForm')
const addOptionInput = document.getElementById('newOptionName')


addNoteSelect.onchange = () => {
    const selectValue = addNoteSelect.value
    if (selectValue === "CREAR CATEGORIA") {
        addNoteSelect.value = 'categoria'
        $('#addOptionModal').modal('show')
    }
    if (selectValue === "ELIMINAR CATEGORIA") {
        deleteCategorie()
    }

}


function displayCategories() {
    const userCategories = JSON.parse(localStorage.getItem('userCategories')) || []
    const options = []
    const categoriasCategorie = `
    <option value="" disabled selected>categoria</option>
    `
    options.push(categoriasCategorie)
    for (let i = 0; i < userCategories.length; i++) {
        const categorie = userCategories[i];
        const option = `
        <option>${categorie.categoriaNombre}</option>
        `
        options.push(option)
    }
    const addOrDeleteCategorie = `
    <option id="addOption" class="text-warning bg-dark">CREAR CATEGORIA</option>
    <option class="bg-danger" id="deleteCategories">ELIMINAR CATEGORIA</option>
    `
    options.push(addOrDeleteCategorie)
    addNoteSelect.innerHTML = options.join('')
}



addOptionForm.onsubmit = (e) => {
    e.preventDefault()
    const optionName = addOptionInput.value
    addOptionForm.reset()
    const userCategories = JSON.parse(localStorage.getItem('userCategories')) || []

    userCategories.push ({
        categoriaNombre: optionName
    })

    const userCategoriesJSON = JSON.stringify(userCategories)
    localStorage.setItem('userCategories',userCategoriesJSON)
    $('#addOptionModal').modal('hide')
    displayCategories()
}

displayCategories()