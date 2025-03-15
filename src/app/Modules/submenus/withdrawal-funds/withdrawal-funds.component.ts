import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-withdrawal-funds',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './withdrawal-funds.component.html',
  styleUrls: ['./withdrawal-funds.component.scss']
})
export class WithdrawalFundsComponent {
  @Input() availableBalance: number = 7500; // Example balance, passed from parent

  withdrawal = {
    amount: null as number | null,
    withdrawalMethod: '',
    accountDetails: ''
  };
  withdrawSuccess: boolean = false;

  onWithdraw(): void {
    if (this.withdrawal.amount && this.withdrawal.withdrawalMethod && this.withdrawal.accountDetails) {
      console.log('Withdrawal Request:', this.withdrawal);
      this.withdrawSuccess = true;
      setTimeout(() => this.withdrawSuccess = false, 3000); // Hide success message after 3s
      this.resetForm();
    }
  }

  resetForm(): void {
    this.withdrawal = { amount: null, withdrawalMethod: '', accountDetails: '' };
  }
}