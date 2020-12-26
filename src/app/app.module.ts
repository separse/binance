import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './BarCharts/chart/chart.component';
import { MonthlyComponent } from './BarCharts/monthly/monthly.component';
import { HeaderComponent } from './Header/header/header.component';
import { OrderBookComponent } from './Trades/order-book/order-book.component';
import { NegativeOrdersComponent } from './Trades/negative-orders/negative-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    MonthlyComponent,
    HeaderComponent,
    OrderBookComponent,
    NegativeOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
