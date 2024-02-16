import { Component } from '@angular/core';
import { OrderServiceService } from '../../Services/order-service.service';
import { Order } from '../../Models/order';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Item } from '../../Models/item';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,HttpClientModule],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {
  newOrder: Order = {
    id: '', 
    orderNo: '',
    contactName: '',
    orderDate: '',
    imageUrl: '',
    itemsOrdered: [],
    orderTotal: 0,
    taxTotal: 0,
    grandTotal: 0
  };

  constructor(private orderService: OrderServiceService) {}

  addOrder(): void {
    this.orderService.addOrder(this.newOrder).subscribe(() => {
      this.orderService.getOrders().subscribe((data) => {
        this.orderService.notifyOrdersUpdated(data);
      });
    });

    this.newOrder = {
      id: '',
      orderNo: '',
      contactName: '',
      orderDate: '',
      imageUrl: '',
      itemsOrdered: [],
      orderTotal: 0,
      taxTotal: 0,
      grandTotal: 0
    };
  }


  addItem(): void {
    const newItem: Item = {
      itemNo: this.newOrder.itemsOrdered.length + 1,
      name: '',
      quantity: 0,
      price: 0,
      itemValue: 0
    };
    this.newOrder.itemsOrdered.push(newItem);
  }

  removeItem(index: number): void {
    this.newOrder.itemsOrdered.splice(index, 1);
  }
  trackByFn(index:number,item:Item): number{
    return index;
  }
}