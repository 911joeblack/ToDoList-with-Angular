import { Component } from "@angular/core";

@Component({
    selector: 'pm-tasks',
    templateUrl: './task.component.html'
})

export class TasksComponent {
    pageTitle: string = 'To Do List';
    tasks: any[] = [
        {
            "status": 0,
            "description": "Daily Git Commit",
            "dateCreated": "8/21/2022",
            "estDate": "8/21/2022",
            "completionDate": "TBD"
        },
        {
            "status": 1,
            "description": "1 Hour Of Code",
            "dateCreated": "8/21/2022",
            "estDate": "8/21/2022",
            "completionDate": "8/21/2022"
        }
    ];
}