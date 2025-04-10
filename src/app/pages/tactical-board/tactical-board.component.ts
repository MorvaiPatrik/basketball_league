import { Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tactical-board',
  standalone: true,
  templateUrl: './tactical-board.component.html',
  styleUrls: ['./tactical-board.component.scss'],
  imports: [
    CommonModule,
    NgStyle,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class TacticalBoardComponent {
  points: { x: number; y: number }[] = [];
  newComment = '';
  comments: { text: string; timestamp: Date }[] = [];

  markers: { x: number; y: number }[] = [];

  onCourtClick(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    this.markers.push({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  }

  addPoint(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    this.points.push({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  }

  getPolylinePoints(): string {
    return this.points.map(p => `${p.x},${p.y}`).join(' ');
  }

  addComment(): void {
    if (this.newComment.trim()) {
      this.comments.push({
        text: this.newComment,
        timestamp: new Date()
      });
      this.newComment = '';
    }
  }
}
