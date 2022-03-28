import { Component, OnInit, Output } from '@angular/core';
import { SignalRService } from '../services/signal-r.service';
import { PolarModel } from '../_interfaces/polar.model';
import { OximeterModel } from '../_interfaces/oximeter.model';
@Component({
  selector: 'app-bluetooth-listing',
  templateUrl: './bluetooth-listing.component.html',
  styleUrls: ['./bluetooth-listing.component.css']
})
export class BluetoothListingComponent{
  oximeterModel:OximeterModel = {
    spo:0,
    heartRate:0
  }
  polarModel:PolarModel = {
    heartRate: 60,
    rrInterval: 900
  };
  options = {
    filters: [
      {services: ['heart_rate']},
      {services: [0x1822]}
    ]
  } 
  service:any = 0x0000;
  characteristic:any = 0x0000;

  constructor(public signalRService: SignalRService){}

  ngOnInit(){
    this.signalRService.startConnection();
    this.signalRService.addTransferListener();
  }
  SignalRSend(){
    this.signalRService.send2(this.polarModel);
  }
  SignalRCloseStream(){
    this.signalRService.closeStream();
  }
  SearchBluetooth() {
    const device = this.RequestDevices()
    .then(this.ConnectDevice)
    .then(this.GetService)
    .then(this.GetCharacteristic)
    .then(this.StartAdvertisement);
  }
  RequestDevices = async () : Promise<BluetoothDevice> => {
    console.log("Devices Requested");
    return navigator.bluetooth.requestDevice(this.options)
  }
  ConnectDevice = async (device:BluetoothDevice):Promise<BluetoothRemoteGATTServer> => {
    switch (device.name){
      case "MD300CI218":
        this.service = 0x1822;
        this.characteristic = 0x2a5f;
        break;
      case "E3K-Wellovate":
        this.service = 'heart_rate';
        this.characteristic = 'heart_rate_measurement';
        break;
    }
    return device.gatt.connect();
  }
  GetService = async (server:BluetoothRemoteGATTServer): Promise<BluetoothRemoteGATTService> => {
    return server.getPrimaryService(this.service);
  }
  GetCharacteristic = async (service:BluetoothRemoteGATTService): Promise<BluetoothRemoteGATTCharacteristic> => {
    return service.getCharacteristic(this.characteristic);
  }
  StartAdvertisement = async (characteristic:BluetoothRemoteGATTCharacteristic): Promise<BluetoothRemoteGATTCharacteristic> =>{
    const char = characteristic.startNotifications();
    characteristic.addEventListener('characteristicvaluechanged', this.CmDataParse)
    return char;
  }
  E3kDataParse(event){
    if(event.target.value){
      this.polarModel.heartRate = event.target.value.getUint8(0);
      this.polarModel.rrInterval = Math.round(60000 /event.target.value.getUint8(0));
      console.log("Heart Rate: " + this.polarModel.heartRate + "   Heart Rate: " + this.polarModel.rrInterval);
      //this.signalRService.send(this.polarModel);
    }
  }
  CmDataParse(event){
    if(event.target.value){
      console.log("SPO2: " + event.target.value.getUint8(1) + "   Heart Rate: " + event.target.value.getUint8(3));
      //this.signalRService.send(this.polarModel);
    }
  }
}


