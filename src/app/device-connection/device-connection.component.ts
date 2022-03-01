import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-device-connection',
  templateUrl: './device-connection.component.html',
  styleUrls: ['./device-connection.component.css']
})
export class DeviceConnectionComponent implements OnInit {
  hubEndpoint:string = "sdfdf";
  facilityId!:Guid ;
  connectToUserEnabled:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onMessageReceived(){

  }

  onConnected(){

  }

  onUserConnected(){

  }
  onUserDisconnected(){

  }
  onDisconnected(){

  }

}
