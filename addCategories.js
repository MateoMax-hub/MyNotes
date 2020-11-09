const addOption = document.getElementById('addOption')
const addOptionSect = document.getElementById('theAddedOptionsSect')
const addOptionForm = document.getElementById('addOptionForm')
const addOptionInput = document.getElementById('newOptionName')


addNoteSelect.onchange = () => {
    const selectValue = addNoteSelect.value
    if (selectValue === "CREAR CATEGORIA") {
        addNoteSelect.value = 'categoria'
        $('#addOptionModal').modal('show')
        console.log('yes')
    } else {
        console.log('no')
    }




}
$('#addOptionModal').modal('show')
