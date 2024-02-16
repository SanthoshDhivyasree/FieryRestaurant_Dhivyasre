import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Order } from '../Models/order';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  private orderUrl='http://localhost:3000/orders'
  private ordersUpdated = new Subject<Order[]>
  constructor(private http:HttpClient) { }

  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.orderUrl);
  }

  deleteOrder(orderId:string):Observable<Order[]>{
    const url = `${this.orderUrl}/${orderId}`;
    return this.http.delete<Order[]>(url);
  }

  addOrder(order: Order): Observable<Order[]> {
    return this.http.post<Order[]>(this.orderUrl, order);
  }
  
  notifyOrdersUpdated(orders: Order[]): void {
    this.ordersUpdated.next(orders);
  }
  
  onOrdersUpdated(): Observable<Order[]> {
    return this.ordersUpdated.asObservable();
  }
  // getbyid(id:string){
  //   return this.http.get<Order>(`${this.orderUrl}/${id}`);
  //   }
}
