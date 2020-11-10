const addOption = document.getElementById('addOption')
const addOptionForm = document.getElementById('addOptionForm')
const addOptionInput = document.getElementById('newOptionName')

categoriesFilterr.onchange = () => {
    const selectValue = categoriesFilter.value
    if (selectValue === "CREAR CATEGORIA") {
        $('#addOptionModal').modal('show')
    }
    if (selectValue === "ELIMINAR CATEGORIA") {
        $('#deleteOptionModal').modal('show')
        displayCategoriesInDelete()
    }
}
editNoteSelect.onchange = () => {
    const selectValue = editNoteSelect.value
    if (selectValue === "CREAR CATEGORIA") {
        $('#addOptionModal').modal('show')
    }
    if (selectValue === "ELIMINAR CATEGORIA") {
        $('#deleteOptionModal').modal('show')
        displayCategoriesInDelete()
    }
}
addNoteSelect.onchange = () => {
    const selectValue = addNoteSelect.value
    const DISABLEPUTO = document.getElementById('DISABLEPUTO')
    DISABLEPUTO.setAttribute('disable','')
    if (selectValue === "CREAR CATEGORIA") {
        $('#addOptionModal').modal('show')
    }
    if (selectValue === "ELIMINAR CATEGORIA") {
        $('#deleteOptionModal').modal('show')
        displayCategoriesInDelete()
    }
}

function displayCategories() {
    const userCategories = JSON.parse(localStorage.getItem('userCategories')) || []
    const options = []
    const categoriasCategorie = `
    <option value="" disabled selected id="DISABLEPUTO">categoria</option>
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
    editNoteSelect.innerHTML = options.join('')
    categoriesFilter.innerHTML = options.join('')
}

addOptionForm.onsubmit = (e) => {
    e.preventDefault()
    const optionName = addOptionInput.value
    const userCategories = JSON.parse(localStorage.getItem('userCategories')) || []
    const addCategorieVal = userCategories.find((c) => c.categoriaNombre == optionName)

    if (optionName == "CREAR CATEGORIA" || optionName == "ELIMINAR CATEGORIA") {
        alert('Por favor elegir otro nombre para la categoria')
    }else if (addCategorieVal === undefined) {
        userCategories.push ({
            categoriaNombre: optionName
        })
        const userCategoriesJSON = JSON.stringify(userCategories)
        localStorage.setItem('userCategories',userCategoriesJSON)
        $('#addOptionModal').modal('hide')
        displayCategories()
    } else {
        alert('La categoria por ingresar ya existe')
    }
    if (addNoteSelect.value === '') {
        addNoteSelect.value = optionName
    }else
    if (editNoteSelect.value === '') {
        editNoteSelect.value = optionName
    }
    addOptionForm.reset()
}

displayCategories()