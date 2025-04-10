import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isLoggedIn = false;

  newsList = [
    {
      title: '🏆 Megkezdődött a rájátszás!',
      content: 'Izgalmas meccsek várhatók a következő hetekben. Ne maradj le!'
    },
    {
      title: '📅 Új meccsek a naptárban',
      content: 'Frissítettük a menetrendet a legutóbbi módosításokkal.'
    },
    {
      title: '🛠️ Karbantartás várható',
      content: 'Április 20-án este rövid ideig nem lesz elérhető az oldal.'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  navigateToSchedule() {
    this.router.navigateByUrl("/schedule");
  }

  navigateToTeams() {
    this.router.navigateByUrl("/team-profile");
  }

  navigateToStatistics(): void {
    this.router.navigate(['/statistics']);
  }

  navigateToForum(): void {
    this.router.navigate(['/forum']);
  }

  navigateToTactical(): void {
    this.router.navigate(['/tactical-board']);
  }

  navigateToPlayerComparison(): void {
    this.router.navigate(['/player-comparison']);
  }

  closeMenu() {
    this.sidenav.close();
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
