import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyToken } from '../_interfaces/MyToken';
import { Observable } from 'rxjs';
import { AUTO_STYLE } from '@angular/animations';
@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  token:string = null;
  constructor(public http:HttpClient) { }

  ngOnInit() {
  }
  getToken(){
  this.http.get<MyToken>("http://localhost:5000/api/member/login").subscribe(data => {
    this.token = data.accessToken
  });
    
  }
  exectuteGetReqest(){
    this.http.get("http://localhost:5000/api/member", {headers:{'Authorization': 'Bearer ' + this.token}})
    .subscribe(data => {
     console.log(data);});
  
  }
}
