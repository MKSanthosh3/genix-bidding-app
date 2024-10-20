import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:60532/api/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<{ user: User; token: string }> {
    return this.http.post<{ user: User; token: string }>(`${this.apiUrl}/login`, { email, password });
  }

  register(firstName: string, lastName: string, email: string, password: string, receiveEmails: boolean, rememberMe: boolean): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, { firstName, lastName, email, password, receiveEmails, rememberMe });
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/logout`, {});
  }
}
