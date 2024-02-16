import { Component } from '@angular/core';
import { ItemsComponent } from '../items/items.component';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  id :number=0;
  orderNo: string='';
  contactName: string='';
  orderDate: string='';
  itemsOrdered: ItemsComponent[]=[];
  orderTotal: number=0;
  taxTotal: number=0;
  grandTotal: number=0;
  

}
