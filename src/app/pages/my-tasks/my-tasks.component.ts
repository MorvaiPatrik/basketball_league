import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-my-tasks',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent {
  tasks = signal<{ task: string, isCompleted: boolean }[]>([
    { task: 'Szabaddobás gyakorlása – napi 50 dobás', isCompleted: false },
    { task: 'Labdavezetés bal kézzel', isCompleted: false },
    { task: 'Gyorsindítás gyakorlása', isCompleted: false },
    { task: '1v1 védekezési pozíció fejlesztése', isCompleted: false }
  ]);

  completedTasks = signal<{ task: string, isCompleted: boolean }[]>([
    { task: 'Kosár alatti befejezések gyakorlása', isCompleted: true },
    { task: 'Alapjárat bemelegítő edzés', isCompleted: true },
    { task: 'Dobóforma javítása tükör előtt', isCompleted: true },
    { task: 'Zónavédekezés áttekintése', isCompleted: true }
  ]);

  taskCount = computed(() => this.tasks().length);
  completedCount = computed(() => this.completedTasks().length);

  isDialogOpen = false;
  newTask: string = '';

  constructor(private dialog: MatDialog) { }

  openNewTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addNewTask(result);
      }
    });
  }

  addNewTask(task: string) {
    if (task.trim()) {
      this.tasks.update(tasks => [...tasks, { task: task.trim(), isCompleted: false }]);
    }
  }

  completeTask(task: { task: string, isCompleted: boolean }) {
    this.completedTasks.update(completedTasks => [...completedTasks, { ...task, isCompleted: true }]);

    this.tasks.update(tasks => tasks.filter(t => t !== task));
  }

  removeCompletedTask(task: { task: string, isCompleted: boolean }) {
    this.completedTasks.update(completedTasks =>
      completedTasks.filter(t => t !== task)
    );
  }

  updateTasks() {
    this.tasks.update(tasks => [...tasks]);
  }
}

@Component({
  selector: 'app-new-task-dialog',
  template: ` 
    <div class="dialog-content">
      <h2>Új edzés hozzáadása</h2>
      <div class="form-field">
        <label for="newTask">Edzés neve</label>
        <input type="text" id="newTask" (input)="onInputChange($event)">
      </div>
      <div class="dialog-buttons">
        <button mat-flat-button color="primary" (click)="addTask()">Hozzáadás</button>
        <button mat-flat-button color="warn" (click)="closeDialog()">Mégse</button>
      </div>
    </div>
  `,
  styles: [
    ` 
      .dialog-content {
        padding: 20px;
      }
      .dialog-buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      }
      .form-field {
        margin-bottom: 16px;
      }
      label {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
      }
      input[type="text"] {
        width: 100%;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #ccc;
      }
    `
  ]
})
export class NewTaskDialogComponent {
  newTask: string = '';

  constructor(public dialogRef: MatDialogRef<NewTaskDialogComponent>) { }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newTask = input.value;
  }

  addTask() {
    this.dialogRef.close(this.newTask);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
