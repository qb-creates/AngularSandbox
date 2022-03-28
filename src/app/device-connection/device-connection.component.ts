import { Component, OnInit, Output } from '@angular/core';
import { SignalRService } from '../services/signal-r.service';
import { PolarModel } from '../_interfaces/polar.model';
import { Guid } from 'guid-typescript';
import { OximeterModel } from '../_interfaces/oximeter.model';

@Component({
  selector: 'app-device-connection',
  templateUrl: './device-connection.component.html',
  styleUrls: ['./device-connection.component.css']
})
export class DeviceConnectionComponent implements OnInit {
  polarModel:PolarModel = {
    heartRate: 60,
    rrInterval: 900
  };
  options = {
    filters: [
      {services: ['heart_rate']},
      {services: [0x1802, 0x1803, 0x1822]},
    ]
  } 
  hubEndpoint:string = "sdfdf";
  facilityId!:Guid ;
  connectToUserEnabled:boolean = true;
  constructor(public signalRService: SignalRService) { }

  ngOnInit() {
  }

  onMessageReceived(){

  }

  onConnected(){

  }

  onUserConnected(){
    this.signalRService.startConnection();
    this.signalRService.addTransferListener();
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
            this.polarModel.heartRate = characteristic.value.getUint8(0);
            this.polarModel.rrInterval = Math.round(60000 /characteristic.value.getUint8(0));
            this.signalRService.send(this.polarModel);
          }
        });
      });
    })
    .catch(error => {
      this.signalRService.closeStream();
      console.log('Argh!! ' + error);
    });
  }
  onUserDisconnected(){

  }
  onDisconnected(){

  }

}
