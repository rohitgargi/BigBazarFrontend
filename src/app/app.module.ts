import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaxTextPipe } from './shared/pipes/max-text.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../materialDesign/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './shared/services/auth.service';
import { AuthInterceptor } from './shared/services/authInterceptor.service';
import { AdminComponent } from './admin/admin/admin.component';

import { StoreModule} from '@ngrx/store';
import { loginReducer } from './store/reducers/auth.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    MaxTextPipe,
    SigninComponent,
    RegisterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({loggedIn: loginReducer}),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
    ],
  providers: [AuthService, {  
    provide: HTTP_INTERCEPTORS,  
    useClass: AuthInterceptor,  
    multi: true  
  }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
