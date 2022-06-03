import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [{
  path:'home',
  component:HomeComponent
},{
  path:'product-list',
  component:ProductsComponent
},
{
  path:'signin',
  component:SigninComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'admin',
  component:AdminComponent
},{
  path:'',
  pathMatch:'full',
  redirectTo: 'home',
},{
  path:'**',
  pathMatch:'full',
  redirectTo: '', // TODO: NOT FOUND COMPOENET HERE
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
