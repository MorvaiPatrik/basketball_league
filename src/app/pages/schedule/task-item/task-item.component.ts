import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Match } from '../../../shared/models/Match';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-match-item',
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class MatchItemComponent {
  @Input() match!: Match;
  @Output() statusChanged = new EventEmitter<Match>();

  toggleStatus(): void {
    this.match.isFinished = !this.match.isFinished;
    this.statusChanged.emit(this.match);
  }
}
