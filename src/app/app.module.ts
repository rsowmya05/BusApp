import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbusComponent } from './addbus/addbus.component';
import { HttpClient } from '@angular/common/http'
import { UpdatebusComponent } from './updatebus/updatebus.component';
import { DeletebusComponent } from './deletebus/deletebus.component';
import { ViewbusComponent } from './viewbus/viewbus.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

var myRoutes:Routes=[
  {path:'add',component:AddbusComponent},
  {path:'update',component:UpdatebusComponent},
  {path:'delete',component:DeletebusComponent},
  {path:'view',component:ViewbusComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddbusComponent,
    UpdatebusComponent,
    DeletebusComponent,
    ViewbusComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule,   
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
