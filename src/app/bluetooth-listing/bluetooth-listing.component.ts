import { Component, ModuleWithComponentFactories, Output } from '@angular/core';
import { NgxSerial } from 'ngx-serial';
import { HttpClient } from '@angular/common/http';
import { PolarModel } from '../_interfaces/polar.model';
@Component({
  selector: 'app-bluetooth-listing',
  templateUrl: './bluetooth-listing.component.html',
  styleUrls: ['./bluetooth-listing.component.css']
})
export class BluetoothListingComponent{
  serial:NgxSerial;
  port:any;
  peak:number;
  polar:PolarModel;

  @Output() heartRate = "";
  constructor(private http:HttpClient) 
  { 
    let options = 
    { 
      baudRate: 115200, 
      dataBits: 8, 
      parity: 'none', 
      bufferSize: 256, 
      flowControl: 'none' 
    };
    
    this.serial = new NgxSerial(data=>{
      this.data = data;
      console.log(data);
    }, options);
  }
  @Output() data!:string;

  SignalRSend(){
    
    this.polar.HeartRate = 80;
    this.polar.RRinterval = 880;
    this.polar.Id = 9;
    this.http.post('https://localhost:5001/api/chart',this.polar).subscribe();
  }

  SearchBluetooth() {
    this.heartRate = "";
    let options = {
      filters: [
        {services: ['heart_rate']},
        {services: [0x1802, 0x1803]},
      ]
    } 
    
    return navigator.bluetooth.requestDevice(options)
    .then(device => {
      console.log('did we make it');
      return device.gatt.connect();
    })
    .then(server => {
      console.log('did we make it');
      return server.getPrimaryService('heart_rate');
    })
    .then(service => {
      console.log('did we make it');
      return service.getCharacteristic('heart_rate_measurement');
    })
    .then(characteristic => {
      characteristic.startNotifications().then(()=>{
        characteristic.addEventListener('characteristicvaluechanged', ()=>{
          if(characteristic.value){

            console.log('> ' + characteristic.value.getUint8(0).toString());
            this.heartRate = characteristic.value.getUint8(0).toString();
        }
        });
      });
    }).catch(error => {
      console.log('Argh!! ' + error);
    });
  }
}
