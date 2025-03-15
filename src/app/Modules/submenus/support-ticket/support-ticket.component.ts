import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-support-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.scss']
})
export class SupportTicketComponent {
  ticket = {
    subject: '',
    urgency: '',
    description: ''
  };
  ticketSubmitted: boolean = false;
  generatedTicketId: string = '';

  onSubmitTicket(): void {
    if (this.ticket.subject && this.ticket.urgency && this.ticket.description) {
      this.generatedTicketId = `TICKET-${Math.floor(1000 + Math.random() * 9000)}`; // Random ticket ID
      console.log('Support Ticket Submitted:', this.ticket, 'Ticket ID:', this.generatedTicketId);
      this.ticketSubmitted = true;
      setTimeout(() => this.ticketSubmitted = false, 5000); // Hide success message after 5s
      this.resetForm();
    }
  }

  resetForm(): void {
    this.ticket = { subject: '', urgency: '', description: '' };
  }
}