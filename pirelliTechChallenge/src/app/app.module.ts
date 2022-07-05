import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppComponent } from './components/app.component';
import { MainComponent } from './components/main/main.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { MeasurementsComponent } from './components/main/measurements/measurements.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { HttpClientModule } from '@angular/common/http';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MeasurementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NzButtonModule,
    NzTabsModule,
    NzTableModule,
    NzLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
