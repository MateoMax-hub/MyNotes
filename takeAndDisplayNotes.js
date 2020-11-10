const addNoteForm = document.getElementById('addNoteForm');
const addNoteName = document.getElementById('addNoteName');
const addNoteSelect = document.getElementById('addNoteSelect');
const addNoteTextarea = document.getElementById('addNoteTextarea');
const notesTable = document.getElementById('notesTable')
const infoModals = document.getElementById('infoModals')
let modalSelectVal = ''



const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

addNoteForm.onsubmit = (e) => {
    e.preventDefault();
    const usersNotes = getNotes()

    const noteName = addNoteName.value;
    const noteSelect = addNoteSelect.value;
    const noteTextarea = addNoteTextarea.value;
    addNoteForm.reset();
    
    
    usersNotes.push ({
        noteName,
        noteSelect,
        noteTextarea,
        id: generateId(),
        createdAt: Date.now()
    })

    const usersNotesJson = JSON.stringify(usersNotes);
    localStorage.setItem('usersNotes',usersNotesJson);
    $('#addNoteModal').modal('hide')
    displayAllNotes()
    createInfoModals()
}

function displayNotes(usersNotes) {

    const row = []
    for (let i = 0; i < usersNotes.length; i++) {
        const usernote = usersNotes[i];

        const tr = `
        <tr>
            <th scope="row">
                <button onclick="deleteUser('${usernote.id}')" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
            </th>
            <td>${usernote.noteName}</td>
            <td>${usernote.noteSelect}</td>
            <td>
                <button type="button" class="btn btn-warning text-white" onclick="displayEditModal('${usernote.id}')">
                    <i class="far fa-edit"></i>
                </button>
                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modal${usernote.id}">
                    Mostrar
                </button>
            </td>
        </tr>
        `
        row.unshift(tr)
    }
    notesTable.innerHTML = row.join('')
}

function displayAllNotes() {
    const usersNotes = getNotes()
    displayNotes(usersNotes)
}


function createInfoModals() {
    const usersNotes = JSON.parse(localStorage.getItem('usersNotes')) || [];
    const modals = []
    for (let i = 0; i < usersNotes.length; i++) {
        const userNote = usersNotes[i];

        const createdAt = new Date(userNote.createdAt)

        const modal = `
        <!-- Modal${userNote.id} -->
        <div class="modal fade" id="modal${userNote.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${userNote.noteName}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h6>${userNote.noteSelect}</h6>
                        <hr>
                        <p>${userNote.noteTextarea}</p>
                        <hr>
                        <h6>Fecha de creacion:${createdAt.toLocaleString()}</h6>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        `
        modals.push(modal)
    }
    infoModals.innerHTML = modals.join('')
}




createInfoModals()
displayAllNotes()

