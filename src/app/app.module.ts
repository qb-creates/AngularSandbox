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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { HttpTestComponent } from './http-test/http-test.component';
@NgModule({
  declarations: [
    AppComponent,
    BluetoothListingComponent,
    FacilityHubConnectorComponent,
    DeviceConnectionComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductAlertsComponent,
    HttpTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule, 
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: BluetoothListingComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'products', component: ProductListComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
