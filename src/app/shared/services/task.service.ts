import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  getDocs,
  Timestamp
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly TASKS_COLLECTION = 'Tasks';

  constructor(private firestore: Firestore) {}

  getTasks(): Observable<Task[]> {
    const tasksRef = collection(this.firestore, this.TASKS_COLLECTION);
    return collectionData(tasksRef, { idField: 'id' }) as Observable<Task[]>;
  }

  getTasksByUserId(userId: string): Observable<Task[]> {
    const tasksRef = collection(this.firestore, this.TASKS_COLLECTION);
    const q = query(tasksRef, where('userId', '==', userId));
    return collectionData(q, { idField: 'id' }) as Observable<Task[]>;
  }

  async addTask(task: Omit<Task, 'id'>): Promise<void> {
    const tasksRef = collection(this.firestore, this.TASKS_COLLECTION);
    await addDoc(tasksRef, {
      ...task,
      createdAt: Timestamp.now()
    });
  }

  async updateTask(taskId: string, updatedTask: Partial<Task>): Promise<void> {
    const taskRef = doc(this.firestore, this.TASKS_COLLECTION, taskId);
    await updateDoc(taskRef, updatedTask);
  }

  async deleteTask(taskId: string): Promise<void> {
    const taskRef = doc(this.firestore, this.TASKS_COLLECTION, taskId);
    await deleteDoc(taskRef);
  }

  getLatestTasks(limitCount: number = 5): Observable<Task[]> {
    const tasksRef = collection(this.firestore, this.TASKS_COLLECTION);
    const q = query(tasksRef, orderBy('createdAt', 'desc'), limit(limitCount));
    return collectionData(q, { idField: 'id' }) as Observable<Task[]>;
  }

  async getNextTasks(lastCreatedAt: Timestamp): Promise<Task[]> {
    const tasksRef = collection(this.firestore, this.TASKS_COLLECTION);
    const q = query(
      tasksRef,
      orderBy('createdAt'),
      startAfter(lastCreatedAt),
      limit(5)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Task[];
  }
}