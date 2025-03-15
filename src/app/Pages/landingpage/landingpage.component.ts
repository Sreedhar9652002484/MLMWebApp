import { Component } from '@angular/core';

interface Plan {
  name: string;
  description: string;
  price: string;
  features: string[];
}

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingComponent {
  plans: Plan[] = [
    {
      name: 'Basic',
      description: 'Perfect for beginners starting their MLM journey.',
      price: '$19.99',
      features: ['Access to Basic Tools', '1 Downline Level', 'Email Support']
    },
    {
      name: 'Pro',
      description: 'Ideal for growing your network and earnings.',
      price: '$49.99',
      features: ['Access to All Tools', '3 Downline Levels', 'Priority Support']
    },
    {
      name: 'Elite',
      description: 'For serious marketers aiming for maximum profits.',
      price: '$99.99',
      features: ['Unlimited Access', 'Unlimited Downlines', '24/7 Support']
    }
  ];

  subscribe(plan: Plan) {
    alert(`Subscribed to ${plan.name} plan!`);
    // Implement subscription logic here (e.g., redirect to payment page)
  }
}