import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userId: number | undefined;
  private email: string | undefined;

  constructor() {
    this.loadUserFromLocalStorage();
  }

  setUserId(userId: number) {
    this.userId = userId;
    localStorage.setItem('userId', userId.toString());
  }

  getUserId(): number | undefined {
    return this.userId;
  }

  setEmail(email: string) {
    this.email = email;
    localStorage.setItem('email', email);
  }

  getEmail(): string | undefined {
    return this.email;
  }

  clearUser() {
    this.userId = undefined;
    this.email = undefined;
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
  }

  private loadUserFromLocalStorage() {
    const userId = localStorage.getItem('userId');
    const email = localStorage.getItem('email');

    if (userId) {
      this.userId = parseInt(userId, 10);
    }

    if (email) {
      this.email = email;
    }
  }
}
