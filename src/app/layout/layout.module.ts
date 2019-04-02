import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  exports: [HeaderComponent, HomeComponent]
})
export class LayoutModule { }
