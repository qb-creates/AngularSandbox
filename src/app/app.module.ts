import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {NgChartsModule} from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BluetoothListingComponent } from './bluetooth-listing/bluetooth-listing.component';
import { FacilityHubConnectorComponent } from './facility-hub-connector/facility-hub-connector.component';
​import { FormsModule } from '@angular/forms';
import { DeviceConnectionComponent } from './device-connection/device-connection.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    BluetoothListingComponent,
    FacilityHubConnectorComponent,
    DeviceConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgChartsModule,
    BrowserModule, 
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
