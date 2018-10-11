/**
 * Version 3 Requirements
 * It should store the todos array on an object
 * It should have a displayTodos method
 * It should have an addTodo method
 * It should have a changeTodo method
 * It should have a deleteTodo method
 **/

var todoList = {
    // It should store the todos array on an object
    todos: ["item 1", "item 2", "item 3", "item 4"],

    // It should have a displayTodos method
    displayTodos: function() {
        console.log("My todos:", this.todos);
    },

    // It should have an addTodo method
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },

    // It should have a changeTodo method
    changeTodo: function(position, newItem) {
        this.todos[position] = newItem;
        this.displayTodos();
    },

    // It should have a deleteTodo method
    deleteTodos: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
}