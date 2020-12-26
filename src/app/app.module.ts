import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './barCharts/chart/chart.component';
import { MonthlyComponent } from './barCharts/monthly/monthly.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    MonthlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
