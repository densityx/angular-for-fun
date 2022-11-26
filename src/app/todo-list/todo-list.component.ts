import {Component} from '@angular/core';

interface TodoProp {
    name: string;
    checked: boolean;
}

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
    name = '';

    todos = [
        {
            name: 'Go to the store',
            checked: true,
        },
        {
            name: 'Watch movie',
            checked: false,
        },
    ];

    get uncheckedTodos() {
        return this.todos.filter(todo => !todo.checked);
    }

    get checkedTodos() {
        return this.todos.filter(todo => todo.checked);
    }

    toggleAllTodos() {
        this.todos
            .filter((todo: TodoProp) => !todo.checked)
            .map((todo: TodoProp) => todo.checked = true);
    }

    toggleTodo(todo: TodoProp) {
        let todoIndex = this.todos.findIndex((innerTodo: TodoProp) => innerTodo.name === todo.name);
        this.todos[todoIndex].checked = !todo.checked;
    }

    addNewTodo() {
        if (this.name == '') return;
        
        this.todos.push({
            name: this.name,
            checked: false,
        });

        this.name = '';
    }
}
