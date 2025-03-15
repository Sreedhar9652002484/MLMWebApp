import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  user = {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    mobile: '+91 9876543210',
    address: '123, Example Street, City, Country',
    aadhar: '1234 5678 9012',
    pan: 'ABCDE1234F',
    bankDetails: {
      bankName: 'Example Bank',
      accountNumber: '123456789012',
      ifscCode: 'EXAM0001234',
      branch: 'Main Branch, City'
    }
  };

  editMode = {
    personal: false,
    kyc: false,
    bank: false
  };

  constructor() {}

  ngOnInit(): void {}

  toggleEditMode(section?: string): void {
    if (section) {
      // this.editMode[section] = !this.editMode[section];
    } else {
      this.editMode.personal = !this.editMode.personal;
      this.editMode.kyc = !this.editMode.kyc;
      this.editMode.bank = !this.editMode.bank;
    }
  }

  saveChanges(section: string): void {
    // Here you can add logic to save changes to a backend API
    console.log(`Saving changes for ${section}:`, this.user);
    // this.editMode[section] = false;
  }

}
