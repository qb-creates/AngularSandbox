import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { PolarModel } from '../_interfaces/polar.model';
@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  
  private hubConnection: signalR.HubConnection;
  private data: PolarModel;
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:5001/polar')
    .build();

    this.hubConnection.start()
    .then(() => console.log('Connection started'))
    .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferListener = () => {
    this.hubConnection.on('HeartRateReceived', (data)=>{
      this.data = data;
      console.log(data);
    });
  }
  public send = (data:PolarModel) => {
    this.hubConnection.send("UpdateHeartRate", data);
  }
}
