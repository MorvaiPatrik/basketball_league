import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-player-comparison',
  templateUrl: './player-comparison.component.html',
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, CommonModule],

  styleUrls: ['./player-comparison.component.scss']
})
export class PlayerComparisonComponent implements OnInit {
  players = [
    { name: 'LeBron James', pointsPerGame: 25, threePointPercentage: 35, defenseRating: 80 },
    { name: 'Stephen Curry', pointsPerGame: 30, threePointPercentage: 42, defenseRating: 70 },
    { name: 'Kevin Durant', pointsPerGame: 27, threePointPercentage: 38, defenseRating: 75 },
    { name: 'Giannis Antetokounmpo', pointsPerGame: 28, threePointPercentage: 30, defenseRating: 85 },
    { name: 'Kawhi Leonard', pointsPerGame: 26, threePointPercentage: 38, defenseRating: 90 },
    { name: 'James Harden', pointsPerGame: 22, threePointPercentage: 36, defenseRating: 70 }
  ];

  player1: any = null;
  player2: any = null;

  constructor() { }

  ngOnInit(): void {
    this.player1 = this.players[0];
    this.player2 = this.players[1];
  }

  onPlayerSelect(): void {

  }
}
