import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { PolarModel } from '../_interfaces/polar.model';
import { Subject, Observable, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  
  private hubConnection: signalR.HubConnection;
  private subject: any;
  constructor(){
  }
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:5001/fresh')
    .build();

    this.hubConnection.start()
    .then(() =>{ 
      console.log('Connection started');
      this.subject = new signalR.Subject();
      this.hubConnection.send("UploadStream", this.subject);
    })
    .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferListener = () => {
    this.hubConnection.on('MessageReceived', (data:string)=>{
      console.log(data);
    });
  }
  public send = (polarModel:PolarModel) => {
    this.subject.next(polarModel);
  }
  public send2(){
    this.hubConnection.send("ConnectDevice", 'Sending data from my angular app.');
  }
  public openStream(){
    this.hubConnection.send("UploadStream", this.subject);
  }
  public closeStream(){
    this.subject.complete();
  }
  greeter(fn: (a: string) => void) {
    fn("Hello, World");
    return 1;
  }
  greeter2(service:number): number{
    service = service * 20;
    return service;
  }

  fn(x){
    
  }
}
