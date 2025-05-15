import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from '../../shared/services/task.service';
import { AuthService } from '../../shared/services/auth.service';
import { Task } from '../../shared/models/Task';
import { Subscription } from 'rxjs';
import { Timestamp } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-tasks',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  completedTasks: Task[] = [];
  latestTasks: Task[] = [];
  paginatedTasks: Task[] = [];
  lastLoadedTimestamp: Timestamp | null = null;

  subscription: Subscription = new Subscription();
  newTask: string = '';
  currentUserId: string | null = null;

  constructor(
    private taskService: TaskService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentUserId = this.authService.getCurrentUserId();
    if (this.currentUserId) {
      this.loadTasks();
      this.loadLatestTasks();
      this.loadNextPaginatedTasks();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadTasks(): void {
    if (!this.currentUserId) return;

    this.subscription.add(
      this.taskService.getTasksByUserId(this.currentUserId).subscribe((tasks: Task[]) => {
        this.tasks = tasks.filter(task => !task.isCompleted);
        this.completedTasks = tasks.filter(task => task.isCompleted);
      })
    );
  }

  loadLatestTasks(): void {
    this.subscription.add(
      this.taskService.getLatestTasks(5).subscribe(tasks => {
        this.latestTasks = tasks;
      })
    );
  }

  async loadNextPaginatedTasks(): Promise<void> {
    const startTimestamp = this.lastLoadedTimestamp || Timestamp.fromMillis(0);
    const tasks = await this.taskService.getNextTasks(startTimestamp);
    if (tasks.length) {
      this.paginatedTasks.push(...tasks);
      this.lastLoadedTimestamp = tasks[tasks.length - 1].createdAt;
    }
  }

  addNewTask(): void {
  if (this.newTask.trim() && this.currentUserId) {
    const newTask: Omit<Task, 'id'> = { 
      task: this.newTask.trim(), 
      isCompleted: false,
      userId: this.currentUserId
    };

    this.taskService.addTask(newTask).then(() => {
      this.newTask = '';
      this.loadTasks();
      this.loadLatestTasks();

      this.lastLoadedTimestamp = null;
      this.paginatedTasks = [];
      this.loadNextPaginatedTasks();
    });
  }
}


  completeTask(task: Task) {
    this.taskService.updateTask(task.id, { isCompleted: true }).then(() => this.loadTasks());
  }

  removeCompletedTask(task: Task) {
  this.taskService.deleteTask(task.id).then(() => {
    this.loadTasks();
    this.loadLatestTasks();

    this.lastLoadedTimestamp = null;
    this.paginatedTasks = [];
    this.loadNextPaginatedTasks();
  });
}

}
