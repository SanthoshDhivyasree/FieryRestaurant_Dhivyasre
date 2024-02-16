import { Component, NgModule, OnInit } from '@angular/core';
import { Order } from '../../Models/order';
import { ServicesService } from '../../Services/services.service';
import { OrderServiceService } from '../../Services/order-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from '../../Models/item';

@Component({
  selector: 'app-view-order',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule,RouterLink],
  templateUrl: './view-order.component.html',
  styleUrl: './view-order.component.css'
})
export class ViewOrderComponent implements OnInit {
  orders: Order[] =[]
  selectedOrderItems:Item[]=[];
  searchOrderId:string='';
  constructor(private viewOrdersService: OrderServiceService,private router:Router) {}

  ngOnInit(): void {
    this.viewOrdersService.getOrders().subscribe((data) => {
      this.orders = data;
    });
    this.viewOrdersService.onOrdersUpdated().subscribe((updatedOrders)=>{
      this.orders = updatedOrders;
    })
  }
  fetchOrders(order: Order): void {
    const itemsOrdered = order.itemsOrdered;
    console.log('Items Ordered:', itemsOrdered);
    this.selectedOrderItems= order.itemsOrdered;
   }
  deleteOrder(orderId:string):void{
    this.viewOrdersService.deleteOrder(orderId).subscribe(()=>{
      this.orders = this.orders.filter((order)=>orderId !== orderId);
    })
  }
  searchOrder(): void {
    if (this.searchOrderId.trim() !== '') {
      this.orders = this.orders.filter((order) => order.id === this.searchOrderId);
    } else {
      this.viewOrdersService.getOrders().subscribe((data) => {
        this.orders = data;
      });
    }
  }
  navi(id:string){
    localStorage.setItem("selectedId", id.toString());
    this.router.navigate(["/item-info"],{queryParams:{id:id}});
  }
}