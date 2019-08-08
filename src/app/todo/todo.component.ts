import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent {
    taskList: Todo[] = [
        {
            task: "Dishes",
            completed: true
        },

        {
            task: "Walk the dog",
            completed: true
        },

        {
            task: "Fold laundry",
            completed: false
        },

        {
            task: "vacuum",
            completed: true
        },

        {
            task: "study",
            completed: false
        }
    ];
    constructor() { }

    ngOnInit() {
    }

}
