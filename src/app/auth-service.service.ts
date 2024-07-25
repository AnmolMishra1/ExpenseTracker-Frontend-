import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private user: string | null = null;

  constructor() {
    if (this.isBrowser()) {
      const storedUser = sessionStorage.getItem('user');
      if (storedUser) {
        this.user = storedUser;
      }
    }
  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }

  login(user: string): void {
    this.user = user;
    //sessionStorage.setItem('user', user);
    if (this.isBrowser()) {
      sessionStorage.setItem('user', user);
    }
  }

  logout(): void {
    this.user = null;
    if (this.isBrowser()) {
      sessionStorage.removeItem('user');
    }
  }

  getUsername(): string | null {
    return this.user;
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof sessionStorage !== 'undefined';
  }
}
