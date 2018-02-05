import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Services
import { DataService } from './services/data.service';

//HighChart
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { ChartsComponent } from './components/charts/charts.component';
import { NewsComponent } from './components/news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ChartsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
