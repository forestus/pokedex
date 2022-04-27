import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Shared
import { SharedModule } from '../shared/shared.module';
// Module Routing
import { AppRoutingModule } from './routing.module';
// Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
