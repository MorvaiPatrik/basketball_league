import { Injectable } from '@angular/core';
import {
  Firestore,
  doc,
  getDoc,
  collection,
  query,
  where,
  collectionData
} from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Observable, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/User';
import { Match } from '../models/Match';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private firestore: Firestore,
    private authService: AuthService
  ) {}

  getUserProfile(): Observable<{
    user: User | null,
    completedMatches: Match[],
    stats: {
      total: number,
      completed: number,
      pending: number,
      completionRate: number
    }
  }> {
    return this.authService.currentUser.pipe(
      switchMap(authUser => {
        if (!authUser) {
          return of({
            user: null,
            completedMatches: [],
            stats: { total: 0, completed: 0, pending: 0, completionRate: 0 }
          });
        }

        return from(this.fetchUserWithCompletedMatches(authUser.uid));
      })
    );
  }

  private async fetchUserWithCompletedMatches(userId: string): Promise<{
    user: User | null,
    completedMatches: Match[],
    stats: {
      total: number,
      completed: number,
      pending: number,
      completionRate: number
    }
  }> {
    try {
      const userDocRef = doc(this.firestore, 'Users', userId);
      const userSnapshot = await getDoc(userDocRef);

      if (!userSnapshot.exists()) {
        return {
          user: null,
          completedMatches: [],
          stats: { total: 0, completed: 0, pending: 0, completionRate: 0 }
        };
      }

      const userData = userSnapshot.data() as User;
      const user = { ...userData, id: userId };
      const matches = user.completed_tasks || [];

      const total = matches.length;
      const completed = matches.filter(match => match.isFinished).length;
      const pending = total - completed;
      const completionRate = total > 0 ? (completed / total) * 100 : 0;

      return {
        user,
        completedMatches: matches,
        stats: {
          total,
          completed,
          pending,
          completionRate
        }
      };
    } catch (error) {
      console.error('Hiba a felhasználói adatok betöltése során:', error);
      return {
        user: null,
        completedMatches: [],
        stats: { total: 0, completed: 0, pending: 0, completionRate: 0 }
      };
    }
  }

  // 4. WHERE: Csak admin felhasználók lekérdezése
  getAdmins(): Observable<User[]> {
    const usersRef = collection(this.firestore, 'Users');
    const q = query(usersRef, where('role', '==', 'admin'));
    return collectionData(q, { idField: 'id' }) as Observable<User[]>;
  }
}
