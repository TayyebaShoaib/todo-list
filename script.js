/**
 * Version 8 Requirements
 * There should an li element for every todo
 * Each li element should contain todoText
 * Each li element should show .completed
**/
var todoList = {
    todos: [
        { todoText: "item 1", completed: false },
        { todoText: "item 2", completed: false },
        { todoText: "item 3", completed: true }
    ],
    addTodo: function(todoText) 
    {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(position, todoText) 
    {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) 
    {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) 
    {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function() 
    {
        let completedTodos = 0;
        let totalTodos = this.todos.length;
        for (var i = 0; i < totalTodos; i++) 
        {
            if (this.todos[i].completed === true) completedTodos++;
        }
        if (completedTodos === totalTodos) 
        {
            for (var i = 0; i < totalTodos; i++)
            {
                this.todos[i].completed = false;
            }
        }
        else 
        {
            for (var i = 0; i < totalTodos; i++) 
            {
                this.todos[i].completed = true;
            }            
        }
    }
}

var handlers = {
    addTodo: function () {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
        view.displayTodos();
    },
    changeTodo: function () {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
        view.displayTodos();
    },
    toggleCompleted: function () {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
        view.displayTodos();
    },
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodos();
    }
};

var view = {
    displayTodos: function () {        
        var todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";
        for (var i = 0; i < todoList.todos.length; i++)
        {
            var todoLi = document.createElement("li");
            var todo = todoList.todos[i];
            var todoTextWithCompletion = "";

            if (todo.completed === true)
            {
                todoTextWithCompletion = "(x) " + todo.todoText;
            }
            else 
            {
                todoTextWithCompletion = "( ) " + todo.todoText;
            }

            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
};