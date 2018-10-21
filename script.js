/**
 * Version 10 Requirements
 * There should a way to create delete buttons
 * There should be a delete button for each todo
 * Each li should have an id that has the todo position
 * Delete button should have access to the todo is
 * Clicking delete should update todoList.todos and the DOM
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
    deleteTodo: function(position) {
        todoList.deleteTodo(position);
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
    todosUl: document.querySelector("ul"),
    displayTodos: function () {        
        this.todosUl.innerHTML = "";
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
            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            this.todosUl.appendChild(todoLi);
        }
    },
    createDeleteButton: function () {
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
    },
    setUpEventListeners: function () {
        this.todosUl.addEventListener("click", function (event) {
            if (event.target.className == "deleteButton")
            {
                todoLi = event.target.parentNode;
                const index = Number(todoLi.id);
                handlers.deleteTodo(index);
            }
        });
    }
};
view.displayTodos();
view.setUpEventListeners();