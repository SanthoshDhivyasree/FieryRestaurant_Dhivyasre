import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ViewOrderInfoServiceService } from '../../Services/view-order-info-service.service';
import { CommonModule } from '@angular/common';
import { Order } from '../../Models/order';
import { OrderServiceService } from '../../Services/order-service.service';
import { Item } from '../../Models/item';

@Component({
  selector: 'app-view-order-info',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './view-order-info.component.html',
  styleUrl: './view-order-info.component.css'
})
export class ViewOrderInfoComponent implements OnInit {
  orders: Order[] =[]
  selectedOrderItems:Item[]=[];
  searchOrderId:string='';
  constructor(private viewOrdersService: OrderServiceService,private router:Router) {}

  ngOnInit(): void {
    this.viewOrdersService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }
  fetchOrders(order: Order): void {
    console.log('Fetch button clicked:', order);
    const itemsOrdered = order.itemsOrdered;
    console.log('Items Ordered:', itemsOrdered);
    this.selectedOrderItems = order.itemsOrdered;
  }
  goBack(): void {
    this.router.navigate(['/view-orders']);
  }
   
 
  // ngOnInit(){
  //   let value:any;
  //   value=localStorage.getItem("selectedId");
  //   console.log(value)
  //   this.viewOrdersService.getbyid(value).subscribe((data)=>{
  //     console.log(data);
  //     this.orders=data;
 
  // });
  // }
}