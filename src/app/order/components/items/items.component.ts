import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  itemNo: number=0;
  name: string='';
  quantity: number=0;
  price: number=0;
  itemValue: number=0;

}
