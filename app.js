$(document).ready(function () {
   
    $('#taskForm').on('submit', function (e) {
        e.preventDefault(); 

        // Obtener el valor del campo de texto
        const taskText = $('#taskInput').val().trim();

        // Validar que el campo no esté vacío
        if (taskText === '') {
            alert('Por favor, escribe una tarea.');
            return;
        }

        // Crear un nuevo elemento de lista
        const taskItem = $('<li></li>')
            .addClass('list-group-item d-flex justify-content-between align-items-center')
            .text(taskText);

        // Agregar un botón de eliminar
        const deleteButton = $('<button></button>')
            .addClass('btn btn-danger btn-sm')
            .text('Eliminar')
            .on('click', function () {
                taskItem.remove(); 
                checkEmptyList(); 
            });

        // Agregar el botón de eliminar al elemento de lista
        taskItem.append(deleteButton);

        // Agregar la tarea a la lista
        $('#taskList').append(taskItem);

        
        $('#taskInput').val('');

        
        $('#emptyMessage').hide();
    });

    // Función para verificar si la lista está vacía
    function checkEmptyList() {
        const taskItems = $('#taskList .list-group-item');
        if (taskItems.length === 0) {
            $('#emptyMessage').show();
        } else {
            $('#emptyMessage').hide();
        }
    }
});