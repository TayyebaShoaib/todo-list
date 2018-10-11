/**
 * Version 4 Requirements
 * todoList.addTodo should add objects
 * todoList.changeTodo should change the todoText property
 * todoList.toggleCompleted should change the completed property
 **/

var todoList = {
    todos: [
        { todoText: "item 1", completed: false },
        { todoText: "item 2", completed: false },
        { todoText: "item 3", completed: false }
    ],
    displayTodos: function() {
        console.log("My todos:", this.todos);
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodos: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
}