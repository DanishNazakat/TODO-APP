function addTodos() {
    let userinp = document.getElementById('userInp');
    let result = document.querySelector('.reault');

    if (userinp.value === "") {
        alert('Enter some Text')
    }
    else {
        let todos = document.createElement('div');
        todos.setAttribute('class', 'todos');
        result.append(todos);

        let todosText = document.createElement('div');
        todosText.innerText = userinp.value;
        todos.appendChild(todosText);


        // edit and delete div
        let editDelete = document.createElement('div');
        todos.append(editDelete);

        // Delet button
        let deletButton = document.createElement('button');
        deletButton.setAttribute('class','deleteButton')
        deletButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        // deletButton.setAttribute('onClick',`function updateValue(){ console.log(todos) }updateValue()`)
        editDelete.appendChild(deletButton);
        deletButton.onclick = function () {
            todos.remove();
        };


        // 
        // Edit  button
        let editButton = document.createElement('button');
        editButton.setAttribute('class','editButton')
        editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
        // deletButton.setAttribute('onClick',`function updateValue(){ console.log(todos) }updateValue()`)
        editDelete.appendChild(editButton);
        editButton.onclick = function () {
            let newValue = prompt('Enter New Value');
            todosText.innerText = newValue;
        };
        userinp.value = "";
    }
}