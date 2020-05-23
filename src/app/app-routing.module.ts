import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { CanActiveGuardService } from './can-active-guard.service';


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'products', component: ProductsComponent},
{path: 'shopping-cart', component: ShoppingCartComponent},
{path: 'login', component: LoginComponent},

{path: 'check-out', component: CheckoutComponent, canActivate: [CanActiveGuardService]},
{path: 'my/orders', component: MyOrdersComponent, canActivate: [CanActiveGuardService]},
{path: 'order', component: OrderConfirmComponent, canActivate: [CanActiveGuardService]},
{path: 'admin/products', component: AdminProductsComponent, canActivate: [CanActiveGuardService]},
{path: 'admin/orders', component: AdminOrdersComponent, canActivate: [CanActiveGuardService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


