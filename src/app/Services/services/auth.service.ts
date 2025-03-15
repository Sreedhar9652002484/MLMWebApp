import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [
    { id: 1, name: 'Admin User', email: 'admin@grmarketing.com', password: 'admin123', role: 'admin' },
    { id: 2, name: 'Regular User', email: 'user@grmarketing.com', password: 'user123', role: 'user' }
  ];

  private currentUser: User | null = null;

  register(user: { name: string, email: string, password: string, role: string }): Observable<void> {
    const newUser: User = {
      id: this.users.length + 1,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role as 'admin' | 'user'
    };
    this.users.push(newUser);
    return of();
  }

  login(credentials: { email: string, password: string }): Observable<User | null> {
    const user = this.users.find(u => u.email === credentials.email && u.password === credentials.password);
    this.currentUser = user || null;
    return of(user || null);
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  logout(): Observable<void> {
    this.currentUser = null;
    return of();
  }
}