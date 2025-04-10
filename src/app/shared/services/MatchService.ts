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
      matchDate: new Date('2025-04-10T19:00:00'),
      location: 'Staples Center, Los Angeles',
      isFinished: new Date('2025-04-10') < new Date('2025-04-13'),
      mvpHome: 'LeBron James',
      mvpAway: 'Jimmy Butler'
    },
    {
      homeTeam: 'Golden State Warriors',
      awayTeam: 'Boston Celtics',
      matchDate: new Date('2025-04-11T20:00:00'),
      location: 'Chase Center, San Francisco',
      isFinished: new Date('2025-04-11') < new Date('2025-04-13'),
      mvpHome: 'Stephen Curry',
      mvpAway: 'Jayson Tatum'
    },
    {
      homeTeam: 'Chicago Bulls',
      awayTeam: 'Brooklyn Nets',
      matchDate: new Date('2025-04-12T18:30:00'),
      location: 'United Center, Chicago',
      isFinished: new Date('2025-04-12') < new Date('2025-04-13'),
      mvpHome: 'Zach LaVine',
      mvpAway: 'Kevin Durant'
    },
    {
      homeTeam: 'Toronto Raptors',
      awayTeam: 'Philadelphia 76ers',
      matchDate: new Date('2025-04-13T19:45:00'),
      location: 'Scotiabank Arena, Toronto',
      isFinished: new Date('2025-04-13') < new Date('2025-04-13'),
      mvpHome: 'Pascal Siakam',
      mvpAway: 'Joel Embiid'
    },
    {
      homeTeam: 'Dallas Mavericks',
      awayTeam: 'Denver Nuggets',
      matchDate: new Date('2025-04-14T20:00:00'),
      location: 'American Airlines Center, Dallas',
      isFinished: new Date('2025-04-14') < new Date('2025-04-13'),
      mvpHome: 'Luka Dončić',
      mvpAway: 'Nikola Jokić'
    },
    {
      homeTeam: 'Phoenix Suns',
      awayTeam: 'Milwaukee Bucks',
      matchDate: new Date('2025-04-15T18:00:00'),
      location: 'Footprint Center, Phoenix',
      isFinished: new Date('2025-04-15') < new Date('2025-04-13'),
      mvpHome: 'Devin Booker',
      mvpAway: 'Giannis Antetokounmpo'
    },
    {
      homeTeam: 'Los Angeles Clippers',
      awayTeam: 'New York Knicks',
      matchDate: new Date('2025-04-16T19:30:00'),
      location: 'Crypto.com Arena, Los Angeles',
      isFinished: new Date('2025-04-16') < new Date('2025-04-13'),
      mvpHome: 'Kawhi Leonard',
      mvpAway: 'Julius Randle'
    },
    {
      homeTeam: 'Atlanta Hawks',
      awayTeam: 'Cleveland Cavaliers',
      matchDate: new Date('2025-04-17T18:45:00'),
      location: 'State Farm Arena, Atlanta',
      isFinished: new Date('2025-04-17') < new Date('2025-04-13'),
      mvpHome: 'Trae Young',
      mvpAway: 'Darius Garland'
    },
    {
      homeTeam: 'Orlando Magic',
      awayTeam: 'Indiana Pacers',
      matchDate: new Date('2025-04-18T20:30:00'),
      location: 'Amway Center, Orlando',
      isFinished: new Date('2025-04-18') < new Date('2025-04-13'),
      mvpHome: 'Paolo Banchero',
      mvpAway: 'Tyrese Haliburton'
    },
    {
      homeTeam: 'Sacramento Kings',
      awayTeam: 'Charlotte Hornets',
      matchDate: new Date('2025-04-19T19:15:00'),
      location: 'Golden 1 Center, Sacramento',
      isFinished: new Date('2025-04-19') < new Date('2025-04-13'),
      mvpHome: 'De’Aaron Fox',
      mvpAway: 'LaMelo Ball'
    }
  ];

  constructor() { }

  getMatches(): Observable<Match[]> {
    const filteredMatches = this.matches.map(match => {
      if (!match.isFinished) {
        const { mvpHome, mvpAway, ...rest } = match;
        return rest;
      }
      return match;
    });

    return of(filteredMatches);
  }
}
