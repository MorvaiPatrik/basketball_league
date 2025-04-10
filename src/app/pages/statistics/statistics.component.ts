import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../shared/services/MatchService';
import { TeamService } from '../../shared/services/TeamService';
import { Match } from '../../shared/models/Match';
import { Team } from '../../shared/models/Team';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  imports: [CommonModule],
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  matches: Match[] = [];
  teams: Team[] = [];
  april14Date = new Date('2025-04-14');

  constructor(
    private matchService: MatchService,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.loadMatches();
    this.loadTeams();
  }

  loadMatches(): void {
    this.matchService.getMatches().subscribe((matches: Match[]) => {
      this.matches = matches;
    });
  }

  loadTeams(): void {
    this.teamService.getTeams().subscribe((teams: Team[]) => {
      this.teams = teams;
    });
  }
}
