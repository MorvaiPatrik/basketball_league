import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TeamService } from '../../shared/services/TeamService';
import { Team } from '../../shared/models/Team';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(data => {
      this.teams = data;
    });
  }
}
