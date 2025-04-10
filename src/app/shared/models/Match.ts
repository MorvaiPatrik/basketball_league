export interface Match {
  homeTeam: string;
  awayTeam: string;
  matchDate: Date;
  location: string;
  isFinished: boolean;
  mvpHome?: string;
  mvpAway?: string;
}
