import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sandbox';
  
  constructor(public signalRService: SignalRService, private http: HttpClient){}

  ngOnInit(){
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();

    this.startHttpRequest();
  }
  startHttpRequest(){
    this.http.get('https://localhost:5001/api/chart')
    .subscribe(res => {
      console.log("Data:  " + res);
    });
  }
}
