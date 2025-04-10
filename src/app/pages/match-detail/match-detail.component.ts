import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Match } from '../../shared/models/Match';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-match-detail',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  template: `
    <div *ngIf="match; else loading" class="match-detail-container">
      <!-- Vissza gomb hozzáadása -->
      <button class="back-btn" (click)="goBack()">Vissza</button>

      <h2>🏀 {{ match.homeTeam }} vs {{ match.awayTeam }}</h2>
      <p><strong>Dátum:</strong> {{ match.matchDate | date:'yyyy-MM-dd HH:mm' }}</p>
      <p><strong>Helyszín:</strong> {{ match.location }}</p>
      <p><strong>Lejátszva:</strong> {{ match.isFinished ? 'Igen' : 'Nem' }}</p>

      <!-- További részletek -->
      <div *ngIf="match.isFinished">
        <h3>Eredmény:</h3>
        <p><strong>{{ match.homeTeam }}: </strong> 85</p>
        <p><strong>{{ match.awayTeam }}: </strong> 78</p>
      </div>

      <!-- MVP játékos -->
      <div *ngIf="match.isFinished">
        <h3>MVP Játékos:</h3>
        <p><strong>{{ match.mvpHome }} ({{ match.homeTeam }})</strong></p>
        <p><strong>{{ match.mvpAway }} ({{ match.awayTeam }})</strong></p>
      </div>
    </div>

    <ng-template #loading>
      <p>Betöltés...</p>
    </ng-template>
  `,
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent {
  match: Match | null = history.state['match'] || null;

  constructor(private router: Router) { }

  goBack(): void {
    this.router.navigate(['/schedule']);
  }
}
