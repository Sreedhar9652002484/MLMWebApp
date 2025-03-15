import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Plan {
  id: number;
  name: string;
  price: number;
  bv: number;
  referralCommission: number;
  treeCommission: number;
}

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paln.component.html',
  styleUrl: './paln.component.scss'
})
export class PlanComponent {

  subscribedPlan: number | null = null; // Track subscribed plan

  plans: Plan[] = [
    { id: 7, name: 'Easy Plan', price: 10, bv: 0, referralCommission: 2, treeCommission: 2 },
    { id: 1, name: 'Basic Plan', price: 100, bv: 1, referralCommission: 5, treeCommission: 20 },
    { id: 4, name: 'Prime Plan', price: 600, bv: 6, referralCommission: 30, treeCommission: 120 },
    { id: 13, name: 'GRM Plan', price: 1200, bv: 12, referralCommission: 60, treeCommission: 240 },
    { id: 2, name: 'Bright App', price: 2500, bv: 25, referralCommission: 125, treeCommission: 500 },
    { id: 16, name: 'GRM Primary', price: 3000, bv: 30, referralCommission: 5, treeCommission: 20 },
    // { id: 3, name: 'Home Plan', price: 5000, bv: 50, referralCommission: 250, treeCommission: 1000 },
    // { id: 5, name: 'GR Plan', price: 10000, bv: 100, referralCommission: 500, treeCommission: 2000 },
    // { id: 6, name: 'GR Diamond', price: 15000, bv: 150, referralCommission: 750, treeCommission: 3000 },
    // { id: 15, name: 'GRM 20000 Plan', price: 20000, bv: 200, referralCommission: 1000, treeCommission: 2000 },
    // { id: 14, name: 'GRM Diamond Plan', price: 25000, bv: 250, referralCommission: 1250, treeCommission: 2500 },
    // { id: 9, name: 'GRM Plan', price: 30000, bv: 150, referralCommission: 1500, treeCommission: 3000 },
    // { id: 10, name: 'GRM Gold Plan', price: 50000, bv: 250, referralCommission: 2500, treeCommission: 5000 },
    // { id: 12, name: 'GRM Daimond Plan', price: 100000, bv: 1000, referralCommission: 5000, treeCommission: 10000 }
  ];

  constructor(private router: Router) {}

  subscribePlan(planId: number) {
    if (confirm('Are you sure to subscribe to this plan?')) {
      this.subscribedPlan = planId;
      console.log(`Subscribed to plan ID: ${planId}`);
      // Add logic to save subscription (e.g., API call) here
    }
  }

}
