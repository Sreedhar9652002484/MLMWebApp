

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Transaction {
  id: string;
  date: Date;
  type: string;
  amount: number;
  status: string;
  description: string;
}

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss'
})
export class IncomeComponent {

  transactions: Transaction[] = [
    { id: 'TXN001', date: new Date('2023-10-01'), type: 'Deposit', amount: 5000, status: 'Submitted', description: 'Initial deposit' },
    { id: 'TXN002', date: new Date('2023-10-02'), type: 'Withdrawal', amount: 2000, status: 'Pending', description: 'Cash withdrawal request' },
    { id: 'TXN003', date: new Date('2023-10-03'), type: 'Referral', amount: 500, status: 'Submitted', description: 'Referral bonus' },
    { id: 'TXN004', date: new Date('2023-10-04'), type: 'Deposit', amount: 3000, status: 'Rejected', description: 'Failed deposit attempt' },
    { id: 'TXN005', date: new Date('2023-10-05'), type: 'Withdrawal', amount: 1000, status: 'Submitted', description: 'Payout request' },
    { id: 'TXN006', date: new Date('2023-10-06'), type: 'Referral', amount: 750, status: 'Pending', description: 'Team referral bonus' },
    { id: 'TXN007', date: new Date('2023-10-07'), type: 'Deposit', amount: 2000, status: 'Submitted', description: 'Top-up deposit' },
  ];

  filteredTransactions: Transaction[] = [];
  paginatedTransactions: Transaction[] = [];
  searchQuery: string = '';
  filterDate: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 1;

  ngOnInit(): void {
    this.filteredTransactions = [...this.transactions];
    this.updatePagination();
  }

  filterTransactions(): void {
    let temp = [...this.transactions];
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      temp = temp.filter(t => 
        t.id.toLowerCase().includes(query) || 
        t.type.toLowerCase().includes(query) || 
        t.description.toLowerCase().includes(query)
      );
    }
    if (this.filterDate) {
      const selectedDate = new Date(this.filterDate);
      temp = temp.filter(t => 
        t.date.toDateString() === selectedDate.toDateString()
      );
    }
    this.filteredTransactions = temp;
    this.currentPage = 1; // Reset to first page
    this.updatePagination();
  }

  filterByDate(): void {
    this.filterTransactions();
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredTransactions.length / this.itemsPerPage);
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedTransactions = this.filteredTransactions.slice(start, end);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

}
