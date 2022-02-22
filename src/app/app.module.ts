import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {NgChartsModule} from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BluetoothListingComponent } from './bluetooth-listing/bluetooth-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    BluetoothListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
