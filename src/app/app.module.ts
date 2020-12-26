import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './BarCharts/chart/chart.component';
import { MonthlyComponent } from './BarCharts/monthly/monthly.component';
import { HeaderComponent } from './Header/header/header.component';
import { OrderBookComponent } from './Trades/order-book/order-book.component';
import { NegativeOrdersComponent } from './Trades/negative-orders/negative-orders.component';
import { OpenPositionComponent } from './Positions/open-position/open-position.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    MonthlyComponent,
    HeaderComponent,
    OrderBookComponent,
    NegativeOrdersComponent,
    OpenPositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
