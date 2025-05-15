export interface Task {
  id: string;
  task: string;
  isCompleted: boolean;
  userId: string;
  createdAt?: any; // Firestore Timestamp
}
