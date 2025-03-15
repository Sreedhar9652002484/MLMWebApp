import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deposit-funds',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './deposit-funds.component.html',
  styleUrls: ['./deposit-funds.component.scss']
})
export class DepositFundsComponent {
  deposit = {
    amount: null as number | null,
    paymentMethod: '',
    description: ''
  };
  depositSuccess: boolean = false;

  onDeposit(): void {
    if (this.deposit.amount && this.deposit.paymentMethod) {
      console.log('Deposit Request:', this.deposit);
      this.depositSuccess = true;
      setTimeout(() => this.depositSuccess = false, 3000); // Hide success message after 3s
      this.resetForm();
    }
  }

  resetForm(): void {
    this.deposit = { amount: null, paymentMethod: '', description: '' };
  }
}