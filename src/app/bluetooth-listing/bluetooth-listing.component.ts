import { Component, OnInit, Output } from '@angular/core';
import { SignalRService } from '../services/signal-r.service';
import { PolarModel } from '../_interfaces/polar.model';
@Component({
  selector: 'app-bluetooth-listing',
  templateUrl: './bluetooth-listing.component.html',
  styleUrls: ['./bluetooth-listing.component.css']
})
export class BluetoothListingComponent{
  polarModel:PolarModel = {
    HeartRate: 60,
    RRinterval: 900
  };
  options = {
    filters: [
      {services: ['heart_rate']},
      {services: [0x1802, 0x1803]},
    ]
  } 
  constructor(public signalRService: SignalRService) 
  { 
  }
  ngOnInit(){
    this.signalRService.startConnection();
    this.signalRService.addTransferListener();
  }

  SignalRSend(){
    this.signalRService.send(this.polarModel);
  }

  SearchBluetooth() {
    return navigator.bluetooth.requestDevice(this.options)
    .then(device => {
      return device.gatt.connect();
    })
    .then(server => {
      return server.getPrimaryService('heart_rate');
    })
    .then(service => {
      return service.getCharacteristic('heart_rate_measurement');
    })
    .then(characteristic => {
      characteristic.startNotifications().then(()=>{
        characteristic.addEventListener('characteristicvaluechanged', ()=>{
          if(characteristic.value){
            this.polarModel.HeartRate = characteristic.value.getUint8(0);
            this.polarModel.RRinterval = Math.round(60000 /characteristic.value.getUint8(0));
            this.signalRService.send(this.polarModel);
          }
        });
      });
    })
    .catch(error => {
      console.log('Argh!! ' + error);
    });
  }
}
