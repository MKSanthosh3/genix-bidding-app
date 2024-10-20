import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  private baseUrl = 'http://localhost:5000/api/auctions';

  constructor(private http: HttpClient) {}

  getAllAuctions(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addAuction(auction: { title: string; description: string; startingBid: number; bidEndDate: Date }): Observable<any> {
    return this.http.post<any>(this.baseUrl, auction);
  }
}