import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule
  ],
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  newComment: string = '';
  comments: Array<{ user: string, text: string, timestamp: Date }> = [];

  constructor() { }

  ngOnInit(): void {
    this.comments = [
      { user: 'Játékos123', text: 'Nagyon izgalmas mérkőzés volt, alig várom a következőt!', timestamp: new Date() },
      { user: 'SportFan', text: 'Szerintem a csapat védekezése jobb lehetne...', timestamp: new Date() }
    ];
  }

  postComment(): void {
    if (this.newComment.trim() !== '') {
      const comment = {
        user: 'Felhasználó',
        text: this.newComment,
        timestamp: new Date()
      };
      this.comments.push(comment);
      this.newComment = '';
    }
  }
}
