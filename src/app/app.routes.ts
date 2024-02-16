import { Routes } from '@angular/router';
import { ViewOrderComponent } from './order/components/view-order/view-order.component';
import { ViewOrderInfoComponent } from './order/components/view-order-info/view-order-info.component';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './index/index.component';
import { PlaceOrderComponent } from './order/components/place-order/place-order.component';

export const routes: Routes = [
{ path: '', redirectTo: '/landing component', pathMatch: 'full' },
  { path: 'view-orders', component: ViewOrderComponent },
  { path: 'view-order/:id', component:ViewOrderInfoComponent},
   { path: 'view-order-info/:orderNo', component:ViewOrderInfoComponent},
   { path: 'view-order-info', component:ViewOrderInfoComponent},
//    { path: 'orders/:id', component: ViewOrderInfoComponent },
   {path:'landing component',component:LandingComponent},
   {path:'place-order',component:PlaceOrderComponent},
];
