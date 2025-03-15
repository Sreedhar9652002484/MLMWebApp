import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { AuthService } from '../../Services/services/auth.service';
import { PlanComponent } from '../submenus/paln/paln.component';
import { ProfileComponent } from '../submenus/profile/profile/profile.component';
import { SidebarComponent } from '../submenus/sidebar/sidebar.component';
import { IncomeComponent } from '../submenus/income/income.component';
import { DepositFundsComponent } from '../submenus/deposit-funds/deposit-funds.component';
import { WithdrawalFundsComponent } from '../submenus/withdrawal-funds/withdrawal-funds.component';
import { SupportTicketComponent } from '../submenus/support-ticket/support-ticket.component';
import { BinaryTreeComponent } from '../submenus/binary-tree/binary-tree.component';

interface SubmenuState {
  dashboard:boolean,
  plan:boolean,
  profile: boolean;
  team: boolean;
  income: boolean;
  wallet: boolean;
  topup: boolean;
  withdrawal: boolean;
}
interface TeamMember {
  name: string;
  id: string;
  joinDate: string;
  status: string;
  position: string;
  income: number;
  profilePic: string;
}

interface BinaryNode {
  name: string;
  status: string;
  profilePic: string;
}

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  standalone: true,
  imports: [CommonModule,PlanComponent,ProfileComponent,SidebarComponent, IncomeComponent, DepositFundsComponent, WithdrawalFundsComponent,SupportTicketComponent,BinaryTreeComponent ],
  styleUrls: ['./userdashboard.component.scss']
})
export class UserDashboardComponent  {
  currentUser: any = null;
  sidebarOpen = false;
  joinDate: Date = new Date('2023-01-15'); // Example join date
  subscribedPlan: string = 'Premium'; // Example plan
  submenus: { [key: string]: boolean } = {
    dashboard: false,
    plan: false,
    profile: false,
    team: false,
    income: false,
    wallet: false,
    topup: false,
    withdrawal: false
  };

  userData = {
    myPackage: 5000,
    totalIncome: 15000,
    availableBalance: 3000,
    withdrawal: 8000,
    dailyIncome: 200,
    directIncome: 5000,
    binaryIncome: 4000,
    leftBusiness: 6000,
    rightBusiness: 5500,
    totalNumbers: 25,
    totalDeposit: 10000, // Example value
    totalWithdrawal: 5000, // Example value
    referralCommission: 2000, // Example value
    referrals: { total: 7, left: 4, right: 3 } 
  };

  notifications = ['New team member joined!', 'Payout processed.', 'Referral bonus credited.'];
  currentLanguage = 'en';
  currentSection: string | null = null; // Default to null, showing dashboard

  constructor(private router: Router, private route: ActivatedRoute) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      const path = url.length > 0 ? url[0].path : 'dashboard'; // Default to 'dashboard' if no path
      console.log('Current route:', path); // Debug to confirm route detection
      this.setCurrentSection(path);
    });
  }

  setCurrentSection(page: string): void {
    console.log('Setting currentSection to:', page); // Debug
    Object.keys(this.submenus).forEach(key => this.submenus[key as keyof SubmenuState] = false);
    if (page in this.submenus) {
      this.currentSection = page;
      this.submenus[page as keyof SubmenuState] = true;
    } else {
      this.currentSection = page; // For external pages, this will show a placeholder
    }
  }
  // ngAfterViewInit() {
  //   this.initCharts();
  // }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  // toggleSubmenu(menu: keyof SubmenuState) {
  //   for (const key in this.submenus) {
  //     if (key !== menu) {
  //       this.submenus[key as keyof SubmenuState] = false;
  //     }
  //   }
  //   this.submenus[menu] = !this.submenus[menu];
  //   console.log(menu);
  // }

  navigateTo(page: string): void {
    Object.keys(this.submenus).forEach(key => this.submenus[key] = false);
    
    if (page in this.submenus) {
      this.currentSection = page;
      this.submenus[page] = true;
    } else {
     
      this.currentSection = page;
     
    }
  }

  logout() {
    // this.authService.logout().subscribe(() => {
    //   this.router.navigate(['/login']);
    // });
  }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
  }

  copyText(position: string) {
    const url = position === 'left'
      ? `https://www.grmarketing.info/user/register?ref=${this.currentUser?.id}&position=left`
      : `https://www.grmarketing.info/user/register?ref=${this.currentUser?.id}&position=right`;
    navigator.clipboard.writeText(url).then(() => {
      alert('Referral link copied!');
    });
  }


}