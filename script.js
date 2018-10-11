/**
 * V1 requirements
 * It should have a place to store todos
 * It should have a way to display todos
 * It should have a way to add new todos
 * It should have a way to change a todo
 * It should have a way to delete a todo
 **/

// It should have a place to store todos
var todos = ["item 1", "item 2", "item 3"];

// It should have a way to display todos
console.log("My todos:", todos);

// It should have a way to add new todos
todos.push("item 4", "item 5");

// It should have a way to change a todo
todos[0] = "item 1 updated";

// It should have a way to delete a todo
todos.splice(0, 1);