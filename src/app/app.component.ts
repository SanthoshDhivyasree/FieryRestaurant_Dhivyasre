import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ViewOrderComponent } from './order/components/view-order/view-order.component';
import { ViewOrderInfoComponent } from './order/components/view-order-info/view-order-info.component';
import { PlaceOrderComponent } from './order/components/place-order/place-order.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderServiceService } from './order/Services/order-service.service';
import { LandingComponent } from './index/index.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HttpClientModule, ViewOrderComponent, ViewOrderInfoComponent, PlaceOrderComponent, CommonModule, FormsModule,RouterLink,RouterOutlet,LandingComponent]
})
export class AppComponent {
  title = 'FieryRestaurant';
}
