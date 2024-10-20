import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiddingService {
  private baseUrl = 'http://localhost:5000/api/bids';

  constructor(private http: HttpClient) {}

  placeBid(auctionId: number, bidAmount: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/place`, { auctionId, bidAmount });
  }

  getBids(auctionId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/auction/${auctionId}`);
  }
}