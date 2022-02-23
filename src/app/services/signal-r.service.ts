import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { PolarModel } from '../_interfaces/polar.model';
import { Subject } from 'rxjs';

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
    let subject = new Subject();
    
    //this.hubConnection.send("UploadStream", subject);
    this.hubConnection.send("UploadStream", subject);
    let iteration = 0;
    
    let intervalHandle = setInterval(()=>{
      iteration++;
      subject.next(iteration.toString());
      if(iteration === 10){
        clearInterval(intervalHandle);
        subject.complete();
      }
      console.log(iteration.toString());
    }, 500);
    console.log("did it");
  }
}
