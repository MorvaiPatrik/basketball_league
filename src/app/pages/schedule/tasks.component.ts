import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Match } from '../../shared/models/Match';
import { MatchService } from '../../shared/services/MatchService';
import { DateFormatterPipe } from '../../shared/pipes/date.pipe';
import { MatchItemComponent } from './task-item/task-item.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  imports: [
    MatTableModule,
    MatCheckboxModule,
    CommonModule,
    MatIconModule
  ]
})
export class TasksComponent implements OnInit {
  matches: Match[] = [];
  displayedColumns: string[] = ['status', 'homeAway', 'location', 'date'];

  constructor(
    private matchService: MatchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.matchService.getMatches().subscribe((data: Match[]) => {
      this.matches = data;
    });
  }

  onStatusChanged(match: Match): void {
    console.log('Status changed for match: ', match);
  }

  openMatchDetails(match: Match): void {
    this.router.navigateByUrl('/match-detail', { state: { match } });
  }
}
