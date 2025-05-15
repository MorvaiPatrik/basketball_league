import { AfterViewInit, Component, Input, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sidenav!: MatSidenav;
  @Input() isLoggedIn: boolean = false;

  constructor() {
    console.log("constructor called");
  }

  ngOnInit(): void {
    console.log("ngOnInit called - isLoggedIn:", this.isLoggedIn);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
  }

  ngOnDestroy(): void {}

  closeMenu() {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }
}
