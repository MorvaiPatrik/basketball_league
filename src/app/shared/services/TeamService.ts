import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from '../models/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teams: Team[] = [
    { name: 'Los Angeles Lakers', city: 'Los Angeles', coach: 'Darvin Ham' },
    { name: 'Miami Heat', city: 'Miami', coach: 'Erik Spoelstra' },
    { name: 'Golden State Warriors', city: 'San Francisco', coach: 'Steve Kerr' },
    { name: 'Boston Celtics', city: 'Boston', coach: 'Joe Mazzulla' },
    { name: 'Chicago Bulls', city: 'Chicago', coach: 'Billy Donovan' },
    { name: 'Brooklyn Nets', city: 'Brooklyn', coach: 'Jacque Vaughn' },
    { name: 'Toronto Raptors', city: 'Toronto', coach: 'Nick Nurse' },
    { name: 'Philadelphia 76ers', city: 'Philadelphia', coach: 'Doc Rivers' },
    { name: 'Dallas Mavericks', city: 'Dallas', coach: 'Jason Kidd' },
    { name: 'Denver Nuggets', city: 'Denver', coach: 'Michael Malone' },
    { name: 'Phoenix Suns', city: 'Phoenix', coach: 'Monty Williams' },
    { name: 'Milwaukee Bucks', city: 'Milwaukee', coach: 'Mike Budenholzer' },
    { name: 'Los Angeles Clippers', city: 'Los Angeles', coach: 'Tyronn Lue' },
    { name: 'New York Knicks', city: 'New York', coach: 'Tom Thibodeau' },
    { name: 'Atlanta Hawks', city: 'Atlanta', coach: 'Nate McMillan' },
    { name: 'Cleveland Cavaliers', city: 'Cleveland', coach: 'J.B. Bickerstaff' },
    { name: 'Orlando Magic', city: 'Orlando', coach: 'Jamahl Mosley' },
    { name: 'Indiana Pacers', city: 'Indianapolis', coach: 'Rick Carlisle' },
    { name: 'Sacramento Kings', city: 'Sacramento', coach: 'Mike Brown' },
    { name: 'Charlotte Hornets', city: 'Charlotte', coach: 'James Borrego' }
  ];

  constructor() { }

  getTeams(): Observable<Team[]> {
    return of(this.teams);
  }
}
