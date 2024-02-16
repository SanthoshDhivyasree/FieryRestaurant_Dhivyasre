import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewOrderInfoServiceService {
  private apiUrl = 'http://localhost:3000/orders'; 

  constructor(private http: HttpClient) {}

  // getOrderInfo(orderId: number): Observable<any> {
  //   const url = `${this.apiUrl}/${orderId}`;
  //   return this.http.get<any>(url);
  // }

  // getOrder(id: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/${id}`);
  // }
  getOrderInfo(orderId: string): Observable<any> {
    const url = `${this.apiUrl}/${orderId}`;
    return this.http.get<any>(url);
  }

}
