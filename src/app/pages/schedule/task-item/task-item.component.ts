import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Match } from '../../../shared/models/Match';

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.scss']
})
export class MatchItemComponent {
  @Input() match!: Match;
  @Output() statusChanged = new EventEmitter<Match>();

  toggleStatus(): void {
    this.match.isFinished = !this.match.isFinished;
    this.statusChanged.emit(this.match);
  }
}
