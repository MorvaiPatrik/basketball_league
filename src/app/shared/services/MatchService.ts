import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Match } from '../models/Match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private matches: Match[] = [
    {
      homeTeam: 'Los Angeles Lakers',
      awayTeam: 'Miami Heat',
      matchDate: new Date('2025-05-10T19:00:00'),
      location: 'Staples Center, Los Angeles',
      isFinished: true,
      mvpHome: 'LeBron James',
      mvpAway: 'Jimmy Butler'
    },
    {
      homeTeam: 'Golden State Warriors',
      awayTeam: 'Boston Celtics',
      matchDate: new Date('2025-05-12T20:00:00'),
      location: 'Chase Center, San Francisco',
      isFinished: true,
      mvpHome: 'Stephen Curry',
      mvpAway: 'Jayson Tatum'
    },
    {
      homeTeam: 'Chicago Bulls',
      awayTeam: 'Brooklyn Nets',
      matchDate: new Date('2025-05-17T18:30:00'),
      location: 'United Center, Chicago',
      isFinished: true,
      mvpHome: 'Zach LaVine',
      mvpAway: 'Kevin Durant'
    },

    {
      homeTeam: 'Toronto Raptors',
      awayTeam: 'Philadelphia 76ers',
      matchDate: new Date('2025-05-26T19:45:00'),
      location: 'Scotiabank Arena, Toronto',
      isFinished: false,
      mvpHome: '',
      mvpAway: ''
    },
    {
      homeTeam: 'Dallas Mavericks',
      awayTeam: 'Denver Nuggets',
      matchDate: new Date('2025-05-28T20:00:00'),
      location: 'American Airlines Center, Dallas',
      isFinished: false,
      mvpHome: '',
      mvpAway: ''
    },
    {
      homeTeam: 'Phoenix Suns',
      awayTeam: 'Milwaukee Bucks',
      matchDate: new Date('2025-06-01T18:00:00'),
      location: 'Footprint Center, Phoenix',
      isFinished: false,
      mvpHome: '',
      mvpAway: ''
    },
    {
      homeTeam: 'Los Angeles Clippers',
      awayTeam: 'New York Knicks',
      matchDate: new Date('2025-06-02T19:30:00'),
      location: 'Crypto.com Arena, Los Angeles',
      isFinished: false,
      mvpHome: '',
      mvpAway: ''
    },
    {
      homeTeam: 'Atlanta Hawks',
      awayTeam: 'Cleveland Cavaliers',
      matchDate: new Date('2025-06-04T18:45:00'),
      location: 'State Farm Arena, Atlanta',
      isFinished: false,
      mvpHome: '',
      mvpAway: ''
    },
    {
      homeTeam: 'Orlando Magic',
      awayTeam: 'Indiana Pacers',
      matchDate: new Date('2025-06-06T20:30:00'),
      location: 'Amway Center, Orlando',
      isFinished: false,
      mvpHome: '',
      mvpAway: ''
    },
    {
      homeTeam: 'Sacramento Kings',
      awayTeam: 'Charlotte Hornets',
      matchDate: new Date('2025-06-08T19:15:00'),
      location: 'Golden 1 Center, Sacramento',
      isFinished: false,
      mvpHome: '',
      mvpAway: ''
    }
  ];

  constructor() { }

  getMatches(): Observable<Match[]> {
    return of(this.matches);
  }
}
