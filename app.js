function addTodos(){
    let userinp = document.getElementById('userInp').value;
    let result = document.querySelector('.reault');


    let todos = document.createElement('div');
    todos.setAttribute('class','todos');
    result.append(todos);

    let todosText = document.createElement('div');
    todosText.innerText = userinp;
    todos.appendChild(todosText);


    // Delet button
    let deletButton = document.createElement('button');
    deletButton.innerText = "delete";
    // deletButton.setAttribute('onClick',`function updateValue(){ console.log(todos) }updateValue()`)
    todos.appendChild(deletButton);
    deletButton.onclick = function () {
        todos.remove();
    };



    
    // Delet button
    let editButton = document.createElement('button');
    editButton.innerText = "Edit";
    // deletButton.setAttribute('onClick',`function updateValue(){ console.log(todos) }updateValue()`)
    todos.appendChild(editButton);
    editButton.onclick = function () {
        let newValue = prompt('Enter New Value');
        todosText.innerText = newValue;        
    };
}