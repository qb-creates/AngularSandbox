import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as SignalR from '@microsoft/signalr';
//import { environment } from '../../../../../environments/environment';
//import { OpenIdConnectService } from '../../../../core/open-id-connect/open-id-connect.service';
import { HubUser, UserOrigin } from '../_interfaces/HubUser';
import { Guid } from 'guid-typescript';
import { HubMessage } from '../_interfaces/HubMessage';
import { Console } from 'console';
@Component({
  selector: 'facility-hub-connector',
  templateUrl: 'facility-hub-connector.component.html',
  styleUrls: ['facility-hub-connector.component.css']
})
export class FacilityHubConnectorComponent implements OnInit, OnDestroy {
  @Input('hubEndpoint') hubEndpoint: string;
  @Input('facilityId') facilityId: Guid = Guid.create();
  @Input('allowDeviceUserConnections') allowDeviceUserConnections: boolean = true;
  @Input('allowWebUserConnections') allowWebUserConnections: boolean = true;
  @Input('allowConnectToUser') allowConnectToUser: boolean = true;
  @Output('connected') connected = new EventEmitter();
  @Output('disconnected') disconnected = new EventEmitter();
  @Output('messageReceived') messageReceived = new EventEmitter<HubMessage>();
  @Output('userConnected') userConnected = new EventEmitter<UserConnectedEventArgs>();
  @Output('userDisconnected') userDisconnected = new EventEmitter<HubUser>();
​
  //general states & models
  hubConnectionInitialized: boolean;
  connectedToHub: boolean;
  connectedToUser: boolean;
  localUser: HubUser = 
  {
    connectionId: "123456",
    groupId: "123456",
    name: "Quentin",
    deviceId: Guid.create(),
    deviceName: "Waya Test Device",
    facilityId: Guid.create(),
    facilityName: "Wellovate",
    connectedToOtherUsers: false,
    connectedUserIds:["4321"],
    userOrigin: UserOrigin.Device,
    sessionId: Guid.create()
  };
  connectedUser: HubUser = null;
​
  //Ng Models
  connectionStatus: string = '';
  nameInput: string = '';
  connectedHubUsers: HubUser[] = [];
  selectedUser: HubUser = null;
​
  //Button States
  nameInputEnabled: boolean = true;
  connectToHubEnabled: boolean = false;
  disconnectFromHubEnabled: boolean = false;
  connectToUserEnabled: boolean = false;
  disconnectFromUserEnabled: boolean = false;
​
  //SignalR
  hubConnection: SignalR.HubConnection;
​
  //Misc flags
  userConnectionInitiated: boolean;
​
  constructor(private toastr: ToastrService  ) { }
​
  ngOnInit() {
    this.establishHubConnection();
  }
​
  ngOnDestroy() {
    this.terminateHubConnection();
  }
​
  establishHubConnection(){ 
    this.hubConnection = new SignalR.HubConnectionBuilder()
      .withUrl("https://localhost:5001/polar")
      .configureLogging(SignalR.LogLevel.Information)
      .build();
​
    this.hubConnection.start().then(() => {
      this.nameInput = "Quentin Baker";
      this.facilityId = Guid.create();
      console.log(this.facilityId);
      if (this.nameInput) {
        this.nameInputEnabled = true;
        this.connectToHubEnabled = true;
        this.connectionStatus = "Awaiting name input and server connection.";
      }
    }).catch((err: Error) => {
      this.onError(err);
    });
​
    this.hubConnection.on("Connected", (msg: HubMessage) => this.hubConnectionConnected(msg));
    this.hubConnection.on("UserConnected", (msg: HubMessage) => this.hubConnectionUserConnected(msg));
    this.hubConnection.on("MessageReceived", (msg: HubMessage) => this.hubConnectionMessageReceived(msg));
    this.hubConnection.on("UsersUpdated", (msg: HubUser[]) => this.hubUsersUpdated(msg));
    this.hubConnection.on("UserDisconnected", (msg: HubMessage) => this.hubConnectionUserDisconnected(msg));
​
    this.hubConnection.onclose((err: Error) => {
​
      if (this.userConnected) {
        this.userDisconnected.emit(this.connectedUser);
      }
​
      this.hubConnection = null;
      this.connectedToHub = false;
      this.connectedToUser = false;
      this.selectedUser = null;
      this.connectedUser = null;
      this.localUser = null;
      this.connectedHubUsers = [];
      this.userConnectionInitiated = false;
​
      this.nameInputEnabled = false;
      this.connectToHubEnabled = false;
      this.disconnectFromHubEnabled = false;
      this.connectToUserEnabled = false;
      this.disconnectFromUserEnabled = false;
​
      this.disconnected.emit();
​
      this.connectionStatus = "Disconnected from server";
    });
​
    //this.nameInput = this.openIdConnectService.user.profile.name;
​
    this.hubConnectionInitialized = true;
  }
​
  terminateHubConnection() {
    this.disconnectFromHubEnabled = false;
​
    if (this.hubConnectionInitialized) {
      this.hubConnectionInitialized = false;
​
      if (this.localUser != null && this.localUser.connectedToOtherUsers && this.connectedUser != null) {
        const hubMessage: HubMessage = {
          to: this.connectedUser.connectionId,
          from: this.localUser,
          message: null
        };
​
        this.hubConnection.invoke("DisconnectFromUser", hubMessage);
      }
​
      this.hubConnection.stop();
    }
  }
​
  hubConnectionConnected(hubMessage: HubMessage): void {
    
    const user = JSON.parse(hubMessage.message) as HubUser;
    this.localUser = user;
    this.connectedToHub = true;
    this.disconnectFromHubEnabled = true;
    console.log("Connected to server. Awaiting connection to user.");
    this.connectionStatus = "Connected to server. Awaiting connection to user.";
    this.connected.emit();
  }
​
  hubConnectionUserConnected(hubMessage: HubMessage): void {
    this.connectedUser = hubMessage.from;
    this.connectedToUser = true;
​
    this.userConnected.emit({ hubUser: hubMessage.from, userConnectionInitiated: this.userConnectionInitiated });
​
    this.connectionStatus = "Connected to user: " + hubMessage.from.name;
​
    this.selectedUser = null;
    this.connectToUserEnabled = false;
    this.disconnectFromUserEnabled = true;
  }
​
  hubConnectionUserDisconnected(hubMessage: HubMessage): void {
    this.connectedUser = null;
    this.connectedToUser = false;
    this.selectedUser = null;
    this.userConnectionInitiated = false;
​
    this.userDisconnected.emit(hubMessage.from);
​
    this.connectionStatus = "Disconnected from user: " + hubMessage.from.name + ".";
​
    this.disconnectFromUserEnabled = false;
  }
​
  hubUsersUpdated(users: HubUser[]) {
    console.log("Users updated");
    this.connectedHubUsers = [];
​ 
    users.forEach(u => {
      console.log(u.connectionId);
      console.log(this.localUser.connectionId);
      console.log(u.userOrigin);
      if (u.connectionId == this.localUser.connectionId) {
        this.localUser = u;
      }
      else if (!u.connectedToOtherUsers) {
        if (u.userOrigin == "WebPortal" && this.allowDeviceUserConnections) {
          this.connectedHubUsers.push(u);
          console.log("Device");
        } else if (u.userOrigin == "Device" && this.allowWebUserConnections) {
          this.connectedHubUsers.push(u);
          console.log("WebPortal");
        }
      }
    });
  }
​
  hubConnectionMessageReceived(hubMessage: HubMessage) {
    this.messageReceived.emit(hubMessage);
  }
​
  onNameInputChange(ev: any) {
    if (this.nameInput && this.hubConnection.state === SignalR.HubConnectionState.Connected) {
      if (this.connectedHubUsers.some(cu => cu.name == this.nameInput && cu.userOrigin == "WebPortal")) {
        this.connectToHubEnabled = false;
      } else {
        this.connectToHubEnabled = true;
      }
    } else {
      this.connectToHubEnabled = false;
    }
  }
​
  onConnectToHubClick(ev: any) {
    this.connectToHubEnabled = false;
    this.nameInputEnabled = false;
​    console.log("New test");
    this.hubConnection.invoke("ConnectWebPortalUser", this.nameInput, this.facilityId.toString())
      .catch((err) => {
        this.onError(err);
        this.connectToHubEnabled = true;
        this.nameInputEnabled = true;
      });
  }
​
  onDisconnectFromHubClick(ev: any) {
    this.terminateHubConnection();
    window.setTimeout(() => {
      this.establishHubConnection();
    }, 1000);
  }
​
  onConnectToUserClick(ev: any) {
    if (this.hubConnectionInitialized && this.localUser && this.selectedUser) {
      this.userConnectionInitiated = true;
​
      const hubMessage: HubMessage = {
        to: this.selectedUser.connectionId,
        from: this.localUser,
        message: null
      };
​
      this.connectionStatus = "Connecting to user: " + this.selectedUser.name + "...";
      this.hubConnection.invoke("ConnectToUser", hubMessage).then(() => {
        this.connectToUserEnabled = false;
        this.disconnectFromUserEnabled = true;
      }).catch((err) => {
        this.connectionStatus = "Connected to server. Awaiting connection to user.";
        this.connectToUserEnabled = true;
        this.disconnectFromUserEnabled = false;
        this.onError(err);
      });
    }
  }
​
  onDisconnectFromUserClick(ev: any) {
    if (this.connectedToHub && this.connectedToUser) {
      this.connectionStatus = "Disconnecting from user: " + this.connectedUser.name;
​
      const hubMessage: HubMessage = {
        to: this.connectedUser.connectionId,
        from: this.localUser,
        message: null
      };
      this.hubConnection.invoke("DisconnectFromUser", hubMessage);
    }
  }
​
  onUserClicked(user: HubUser) {
    if (this.connectedToHub && !this.connectedToUser && !user.connectedToOtherUsers) {
      this.selectedUser = user;
​
      if (this.selectedUser != null) {
        this.connectToUserEnabled = true;
      }
    }
  }
​
  onError(error: Error) {
    if (error.message.indexOf("HubException:") > 0) {
      var errorMessage = error.message.split("HubException:")[1];
      this.toastr.error(errorMessage, "Error!");
    } else {
      this.toastr.error("An error occured while processing your request.", "Error!");
    }
  }
​
  public sendMessage(message: object): void {
    if (this.connectedToUser) {
      const hubMessage: HubMessage = {
        to: this.connectedUser.connectionId,
        from: this.localUser,
        message: JSON.stringify(message)
      };
      this.hubConnection.invoke("SendMessage", hubMessage);
    }
  }
}
​
export interface UserConnectedEventArgs {
  hubUser: HubUser;
  userConnectionInitiated: boolean;
}
