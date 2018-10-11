/**
 * Version 2 Requirements
 * It should have a function to display todos
 * It should have a function to add todos
 * It should have a function to change todos
 * It should have a function to delete todos
 **/

var todos = ["item 1", "item 2", "item 3", "item 4"];

// It should have a function to display todos
function displayTodos()
{
    console.log("My todos:", todos);
}

// It should have a function to add todos
function addTodo(todo) 
{
    todos.push(todo);
    displayTodos();
}

// It should have a function to change todos
function changeTodo(position, newItem) 
{
    todos[position] = newItem;
    displayTodos();
}

// It should have a function to delete todos
function deleteTodos(position) 
{
    todos.splice(position, 1);
    displayTodos();
}