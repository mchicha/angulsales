import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CustomersComponent } from './customers/customers.component';
import { CompaniesComponent } from './companies/companies.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CustomersComponent,
    CompaniesComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
