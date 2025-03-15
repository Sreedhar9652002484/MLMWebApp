import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

// Define an explicit interface for submenus
interface SubmenuState {
  profile: boolean;
  team: boolean;
  income: boolean;
  wallet: boolean;
  topup: boolean;
  withdrawal: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() navigate = new EventEmitter<string>();

  sidebarOpen: boolean = false;
  submenus: SubmenuState = {
    profile: false,
    team: false,
    income: false,
    wallet: false,
    topup: false,
    withdrawal: false
  };

  constructor(private router: Router) {}

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

 
  toggleSubmenu(menu: keyof SubmenuState) {
    for (const key in this.submenus) {
      if (key !== menu) {
        this.submenus[key as keyof SubmenuState] = false;
      }
    }
    this.submenus[menu] = !this.submenus[menu];
    console.log(menu);
  }

  navigateTo(page: string): void {
    // this.navigate.emit(page);
    console.log("",page);
    this.router.navigate([`${page}`]);
  }

  logout(): void {
    console.log('Logging out...');
    this.router.navigate(['/login']);
  }
}