(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_interfaces/HubUser.ts":
/*!****************************************!*\
  !*** ./src/app/_interfaces/HubUser.ts ***!
  \****************************************/
/*! exports provided: UserOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrigin", function() { return UserOrigin; });
var UserOrigin;
(function (UserOrigin) {
    UserOrigin["WebPortal"] = "WebPortal";
    UserOrigin["Device"] = "Device";
})(UserOrigin || (UserOrigin = {}));


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-device-connection></app-device-connection>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-sandbox';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bluetooth_listing_bluetooth_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bluetooth-listing/bluetooth-listing.component */ "./src/app/bluetooth-listing/bluetooth-listing.component.ts");
/* harmony import */ var _facility_hub_connector_facility_hub_connector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./facility-hub-connector/facility-hub-connector.component */ "./src/app/facility-hub-connector/facility-hub-connector.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _device_connection_device_connection_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./device-connection/device-connection.component */ "./src/app/device-connection/device-connection.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



//import {NgChartsModule} from 'ng2-charts';








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _bluetooth_listing_bluetooth_listing_component__WEBPACK_IMPORTED_MODULE_6__["BluetoothListingComponent"],
                _facility_hub_connector_facility_hub_connector_component__WEBPACK_IMPORTED_MODULE_7__["FacilityHubConnectorComponent"],
                _device_connection_device_connection_component__WEBPACK_IMPORTED_MODULE_9__["DeviceConnectionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                //NgChartsModule,
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bluetooth-listing/bluetooth-listing.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/bluetooth-listing/bluetooth-listing.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#comHeader{\r\n    color: whitesmoke;\r\n    font-size:60px;\r\n    margin: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmx1ZXRvb3RoLWxpc3RpbmcvYmx1ZXRvb3RoLWxpc3RpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYmx1ZXRvb3RoLWxpc3RpbmcvYmx1ZXRvb3RoLWxpc3RpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb21IZWFkZXJ7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGZvbnQtc2l6ZTo2MHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/bluetooth-listing/bluetooth-listing.component.html":
/*!********************************************************************!*\
  !*** ./src/app/bluetooth-listing/bluetooth-listing.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"comHeader\">E3K Heart Rate</h1>\r\n<button (click)=\"SearchBluetooth()\">Search BLE</button>\r\n\r\n<button (click)=\"SignalRSend()\">Signal-r Send</button>\r\n\r\n<button (click)=\"SignalRCloseStream()\">Signal-r Close</button>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/bluetooth-listing/bluetooth-listing.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/bluetooth-listing/bluetooth-listing.component.ts ***!
  \******************************************************************/
/*! exports provided: BluetoothListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothListingComponent", function() { return BluetoothListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_signal_r_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/signal-r.service */ "./src/app/services/signal-r.service.ts");



var BluetoothListingComponent = /** @class */ (function () {
    function BluetoothListingComponent(signalRService) {
        this.signalRService = signalRService;
        this.polarModel = {
            heartRate: 60,
            rrInterval: 900
        };
        this.options = {
            filters: [
                { services: ['heart_rate'] },
                { services: [0x1802, 0x1803] },
            ]
        };
    }
    BluetoothListingComponent.prototype.ngOnInit = function () {
        this.signalRService.startConnection();
        this.signalRService.addTransferListener();
    };
    BluetoothListingComponent.prototype.SignalRSend = function () {
        this.signalRService.send2(this.polarModel);
    };
    BluetoothListingComponent.prototype.SignalRCloseStream = function () {
        this.signalRService.closeStream();
    };
    BluetoothListingComponent.prototype.SearchBluetooth = function () {
        var _this = this;
        return navigator.bluetooth.requestDevice(this.options)
            .then(function (device) {
            return device.gatt.connect();
        })
            .then(function (server) {
            return server.getPrimaryService('heart_rate');
        })
            .then(function (service) {
            return service.getCharacteristic('heart_rate_measurement');
        })
            .then(function (characteristic) {
            characteristic.startNotifications().then(function () {
                characteristic.addEventListener('characteristicvaluechanged', function () {
                    if (characteristic.value) {
                        _this.polarModel.heartRate = characteristic.value.getUint8(0);
                        _this.polarModel.rrInterval = Math.round(60000 / characteristic.value.getUint8(0));
                        _this.signalRService.send(_this.polarModel);
                    }
                });
            });
        })
            .catch(function (error) {
            console.log('Argh!! ' + error);
        });
    };
    BluetoothListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bluetooth-listing',
            template: __webpack_require__(/*! ./bluetooth-listing.component.html */ "./src/app/bluetooth-listing/bluetooth-listing.component.html"),
            styles: [__webpack_require__(/*! ./bluetooth-listing.component.css */ "./src/app/bluetooth-listing/bluetooth-listing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_signal_r_service__WEBPACK_IMPORTED_MODULE_2__["SignalRService"]])
    ], BluetoothListingComponent);
    return BluetoothListingComponent;
}());



/***/ }),

/***/ "./src/app/device-connection/device-connection.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/device-connection/device-connection.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS1jb25uZWN0aW9uL2RldmljZS1jb25uZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/device-connection/device-connection.component.html":
/*!********************************************************************!*\
  !*** ./src/app/device-connection/device-connection.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<facility-hub-connector [hubEndpoint]=\"hubEndpoint\" [facilityId]=\"facilityId\" [allowDeviceUserConnections]=\"true\"\r\n  [allowWebUserConnections]=\"false\" [allowConnectToUser]=\"connectToUserEnabled\"\r\n  (messageReceived)=\"onMessageReceived($event)\" (connected)=\"onConnected()\" (userConnected)=\"onUserConnected($event)\"\r\n  (userDisconnected)=\"onUserDisconnected()\" (disconnected)=\"onDisconnected()\"></facility-hub-connector>"

/***/ }),

/***/ "./src/app/device-connection/device-connection.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/device-connection/device-connection.component.ts ***!
  \******************************************************************/
/*! exports provided: DeviceConnectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceConnectionComponent", function() { return DeviceConnectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeviceConnectionComponent = /** @class */ (function () {
    function DeviceConnectionComponent() {
        this.hubEndpoint = "sdfdf";
        this.connectToUserEnabled = false;
    }
    DeviceConnectionComponent.prototype.ngOnInit = function () {
    };
    DeviceConnectionComponent.prototype.onMessageReceived = function () {
    };
    DeviceConnectionComponent.prototype.onConnected = function () {
    };
    DeviceConnectionComponent.prototype.onUserConnected = function () {
    };
    DeviceConnectionComponent.prototype.onUserDisconnected = function () {
    };
    DeviceConnectionComponent.prototype.onDisconnected = function () {
    };
    DeviceConnectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-connection',
            template: __webpack_require__(/*! ./device-connection.component.html */ "./src/app/device-connection/device-connection.component.html"),
            styles: [__webpack_require__(/*! ./device-connection.component.css */ "./src/app/device-connection/device-connection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeviceConnectionComponent);
    return DeviceConnectionComponent;
}());



/***/ }),

/***/ "./src/app/facility-hub-connector/facility-hub-connector.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/facility-hub-connector/facility-hub-connector.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "audio {\r\n    width: 90%;\r\n  }\r\n  table {\r\n    border-collapse: collapse;\r\n  }\r\n  th, td {\r\n    border: 1px solid black;\r\n  }\r\n  tr:hover {\r\n    background-color: #F5F5F5;\r\n  }\r\n  div.graph-container {\r\n    float: left;\r\n    margin: 0.5em;\r\n    width: calc(50% - 1em);\r\n  }\r\n  a#viewSource {\r\n    clear: both;\r\n  }\r\n  div.users-box {\r\n    margin-top: 15px;\r\n    height: 150px; width: 100%;\r\n    border: 2px solid black;\r\n    overflow-y: scroll\r\n  }\r\n  div.user-box{\r\n    height: 40px;\r\n    cursor: pointer;\r\n    vertical-align: middle;\r\n    line-height: 40px;\r\n  }\r\n  div.user-box.selected{\r\n    background-color: darkgrey !important;\r\n  }\r\n  div.user-box.inCall {\r\n    color: red;\r\n    cursor: default;\r\n  }\r\n  div.user-box:nth-child(even){\r\n    background-color: beige;\r\n  }\r\n  .row {\r\n    margin-bottom: 10px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFjaWxpdHktaHViLWNvbm5lY3Rvci9mYWNpbGl0eS1odWItY29ubmVjdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0VBQ1o7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhLEVBQUUsV0FBVztJQUMxQix1QkFBdUI7SUFDdkI7RUFDRjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxxQ0FBcUM7RUFDdkM7RUFDQTtJQUNFLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2ZhY2lsaXR5LWh1Yi1jb25uZWN0b3IvZmFjaWxpdHktaHViLWNvbm5lY3Rvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXVkaW8ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgdGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB9XHJcbiAgdGgsIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuICB0cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gIH1cclxuICBkaXYuZ3JhcGgtY29udGFpbmVyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDFlbSk7XHJcbiAgfVxyXG4gIGEjdmlld1NvdXJjZSB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgZGl2LnVzZXJzLWJveCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDsgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbFxyXG4gIH1cclxuICBkaXYudXNlci1ib3h7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gIGRpdi51c2VyLWJveC5zZWxlY3RlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGRpdi51c2VyLWJveC5pbkNhbGwge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcbiAgZGl2LnVzZXItYm94Om50aC1jaGlsZChldmVuKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG4gIH1cclxuICAucm93IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/facility-hub-connector/facility-hub-connector.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/facility-hub-connector/facility-hub-connector.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 [hidden]=\"true\">\r\n  <!--No need for this-->\r\n  Connection Status: {{connectionStatus}}\r\n</h4>\r\n<div class=\"row\" [hidden]=\"true\">\r\n  <div class=\"col\">\r\n    <label for=\"nameInput\">Enter your name:</label>\r\n    <input class=\"form-control\" id=\"nameInput\" placeholder=\"Enter your name\" [(ngModel)]=\"nameInput\"\r\n      [disabled]=\"!nameInputEnabled\" (ngModelChange)=\"onNameInputChange($event)\" />\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col col-auto d-flex flex-column\">\r\n    <button class=\"btn btn-success\" id=\"connectToHubButton\" (click)=\"onConnectToHubClick($event)\"\r\n      [hidden]=\"!connectToHubEnabled\">Connect to Server</button>\r\n    <button class=\"btn btn-danger\" id=\"disconnectFromHubButton\" (click)=\"onDisconnectFromHubClick($event)\"\r\n      [hidden]=\"!disconnectFromHubEnabled\">Disconnect from Server</button>\r\n  </div>\r\n  <div class=\"col col-auto d-flex flex-column\">\r\n    <button class=\"btn btn-success\" id=\"connectToUserButton\" (click)=\"onConnectToUserClick($event)\"\r\n      [hidden]=\"!connectToUserEnabled || !allowConnectToUser\">Connect To User</button>\r\n    <button class=\"btn btn-danger\" id=\"disconnectFromUserButton\" (click)=\"onDisconnectFromUserClick($event)\"\r\n      [hidden]=\"!disconnectFromUserEnabled\">Disconnect From User\r\n    </button>\r\n  </div>\r\n</div>\r\n<h4 *ngIf=\"!connectedToUser\" style=\"color: white; font-size: 25px;\">Available Users:</h4>\r\n<div class=\"row\" *ngIf=\"!connectedToUser\">\r\n  <div class=\"col\">\r\n    <div id=\"users-list\" class=\"users-box\">\r\n      <div *ngFor=\"let user of connectedHubUsers\" class=\"user-box\" (click)=\"onUserClicked(user)\"\r\n        [class.selected]=\"selectedUser && selectedUser.connectionId == user.connectionId\">\r\n        <div *ngIf=\"!user.connectedToOtherUsers\">{{user.name}}</div>\r\n        <!--<div *ngIf=\"user.connectedToOtherUsers\">{{user.name}} (unavailable)</div>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/facility-hub-connector/facility-hub-connector.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/facility-hub-connector/facility-hub-connector.component.ts ***!
  \****************************************************************************/
/*! exports provided: FacilityHubConnectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityHubConnectorComponent", function() { return FacilityHubConnectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/signalr */ "./node_modules/@microsoft/signalr/dist/esm/index.js");
/* harmony import */ var _interfaces_HubUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_interfaces/HubUser */ "./src/app/_interfaces/HubUser.ts");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_5__);




//import { environment } from '../../../../../environments/environment';
//import { OpenIdConnectService } from '../../../../core/open-id-connect/open-id-connect.service';


var FacilityHubConnectorComponent = /** @class */ (function () {
    function FacilityHubConnectorComponent(toastr) {
        this.toastr = toastr;
        this.allowDeviceUserConnections = true;
        this.allowWebUserConnections = true;
        this.allowConnectToUser = true;
        this.connected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.disconnected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.messageReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userConnected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userDisconnected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.localUser = {
            connectionId: "123456",
            groupId: "123456",
            name: "Quentin",
            deviceId: guid_typescript__WEBPACK_IMPORTED_MODULE_5__["Guid"].create(),
            deviceName: "Waya Test Device",
            facilityId: guid_typescript__WEBPACK_IMPORTED_MODULE_5__["Guid"].create(),
            facilityName: "Wellovate",
            connectedToOtherUsers: false,
            connectedUserIds: ["4321"],
            userOrigin: _interfaces_HubUser__WEBPACK_IMPORTED_MODULE_4__["UserOrigin"].Device,
            sessionId: guid_typescript__WEBPACK_IMPORTED_MODULE_5__["Guid"].create()
        };
        this.connectedUser = null;
        //Ng Models
        this.connectionStatus = '';
        this.nameInput = '';
        this.connectedHubUsers = [];
        this.selectedUser = null;
        //Button States
        this.nameInputEnabled = true;
        this.connectToHubEnabled = false;
        this.disconnectFromHubEnabled = false;
        this.connectToUserEnabled = false;
        this.disconnectFromUserEnabled = false;
    }
    FacilityHubConnectorComponent.prototype.ngOnInit = function () {
        this.establishHubConnection();
    };
    FacilityHubConnectorComponent.prototype.ngOnDestroy = function () {
        this.terminateHubConnection();
    };
    FacilityHubConnectorComponent.prototype.establishHubConnection = function () {
        var _this = this;
        this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__["HubConnectionBuilder"]()
            .withUrl("https://localhost:5001/polar")
            .configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Information)
            .build();
        this.hubConnection.start().then(function () {
            if (_this.nameInput) {
                _this.nameInputEnabled = true;
                _this.connectToHubEnabled = true;
                _this.connectionStatus = "Awaiting name input and server connection.";
            }
        }).catch(function (err) {
            _this.onError(err);
        });
        this.hubConnection.on("Connected", function (msg) { return _this.hubConnectionConnected(msg); });
        this.hubConnection.on("MessageReceived", function (msg) { return _this.hubConnectionMessageReceived(msg); });
        this.hubConnection.on("UsersUpdated", function (msg) { return _this.hubUsersUpdated(msg); });
        this.hubConnection.on("UserConnected", function (msg) { return _this.hubConnectionUserConnected(msg); });
        this.hubConnection.on("UserDisconnected", function (msg) { return _this.hubConnectionUserDisconnected(msg); });
        this.hubConnection.onclose(function (err) {
            if (_this.userConnected) {
                _this.userDisconnected.emit(_this.connectedUser);
            }
            _this.hubConnection = null;
            _this.connectedToHub = false;
            _this.connectedToUser = false;
            _this.selectedUser = null;
            _this.connectedUser = null;
            _this.localUser = null;
            _this.connectedHubUsers = [];
            _this.userConnectionInitiated = false;
            _this.nameInputEnabled = false;
            _this.connectToHubEnabled = false;
            _this.disconnectFromHubEnabled = false;
            _this.connectToUserEnabled = false;
            _this.disconnectFromUserEnabled = false;
            _this.disconnected.emit();
            _this.connectionStatus = "Disconnected from server";
        });
        //this.nameInput = this.openIdConnectService.user.profile.name;
        this.hubConnectionInitialized = true;
    };
    FacilityHubConnectorComponent.prototype.terminateHubConnection = function () {
        this.disconnectFromHubEnabled = false;
        if (this.hubConnectionInitialized) {
            this.hubConnectionInitialized = false;
            if (this.localUser != null && this.localUser.connectedToOtherUsers && this.connectedUser != null) {
                var hubMessage = {
                    to: this.connectedUser.connectionId,
                    from: this.localUser,
                    message: null
                };
                this.hubConnection.invoke("DisconnectFromUser", hubMessage);
            }
            this.hubConnection.stop();
        }
    };
    FacilityHubConnectorComponent.prototype.hubConnectionConnected = function (hubMessage) {
        var user = JSON.parse(hubMessage.message);
        this.localUser = user;
        this.connectedToHub = true;
        this.disconnectFromHubEnabled = true;
        this.connectionStatus = "Connected to server. Awaiting connection to user.";
        this.connected.emit();
    };
    FacilityHubConnectorComponent.prototype.hubConnectionUserConnected = function (hubMessage) {
        this.connectedUser = hubMessage.from;
        this.connectedToUser = true;
        this.userConnected.emit({ hubUser: hubMessage.from, userConnectionInitiated: this.userConnectionInitiated });
        this.connectionStatus = "Connected to user: " + hubMessage.from.name;
        this.selectedUser = null;
        this.connectToUserEnabled = false;
        this.disconnectFromUserEnabled = true;
    };
    FacilityHubConnectorComponent.prototype.hubConnectionUserDisconnected = function (hubMessage) {
        this.connectedUser = null;
        this.connectedToUser = false;
        this.selectedUser = null;
        this.userConnectionInitiated = false;
        this.userDisconnected.emit(hubMessage.from);
        this.connectionStatus = "Disconnected from user: " + hubMessage.from.name + ".";
        this.disconnectFromUserEnabled = false;
    };
    FacilityHubConnectorComponent.prototype.hubUsersUpdated = function (users) {
        var _this = this;
        console.log("Users updated");
        this.connectedHubUsers = [];
        users.forEach(function (u) {
            if (u.connectionId == _this.localUser.connectionId) {
                _this.localUser = u;
            }
            else if (!u.connectedToOtherUsers) {
                if (u.userOrigin == "Device" && _this.allowDeviceUserConnections) {
                    _this.connectedHubUsers.push(u);
                }
                else if (u.userOrigin == "WebPortal" && _this.allowWebUserConnections) {
                    _this.connectedHubUsers.push(u);
                }
            }
        });
        //this.connectedHubUsers.push(this.localUser);
    };
    FacilityHubConnectorComponent.prototype.hubConnectionMessageReceived = function (hubMessage) {
        this.messageReceived.emit(hubMessage);
    };
    FacilityHubConnectorComponent.prototype.onNameInputChange = function (ev) {
        var _this = this;
        if (this.nameInput && this.hubConnection.state === _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__["HubConnectionState"].Connected) {
            if (this.connectedHubUsers.some(function (cu) { return cu.name == _this.nameInput && cu.userOrigin == "WebPortal"; })) {
                this.connectToHubEnabled = false;
            }
            else {
                this.connectToHubEnabled = true;
            }
        }
        else {
            this.connectToHubEnabled = false;
        }
    };
    FacilityHubConnectorComponent.prototype.onConnectToHubClick = function (ev) {
        var _this = this;
        this.connectToHubEnabled = false;
        this.nameInputEnabled = false;
        this.hubConnection.invoke("ConnectWebPortalUser", this.nameInput, this.facilityId)
            .catch(function (err) {
            _this.onError(err);
            _this.connectToHubEnabled = true;
            _this.nameInputEnabled = true;
        });
    };
    FacilityHubConnectorComponent.prototype.onDisconnectFromHubClick = function (ev) {
        var _this = this;
        this.terminateHubConnection();
        window.setTimeout(function () {
            _this.establishHubConnection();
        }, 1000);
    };
    FacilityHubConnectorComponent.prototype.onConnectToUserClick = function (ev) {
        var _this = this;
        if (this.hubConnectionInitialized && this.localUser && this.selectedUser) {
            this.userConnectionInitiated = true;
            var hubMessage = {
                to: this.selectedUser.connectionId,
                from: this.localUser,
                message: null
            };
            this.connectionStatus = "Connecting to user: " + this.selectedUser.name + "...";
            this.hubConnection.invoke("ConnectToUser", hubMessage).then(function () {
                _this.connectToUserEnabled = false;
                _this.disconnectFromUserEnabled = true;
            }).catch(function (err) {
                _this.connectionStatus = "Connected to server. Awaiting connection to user.";
                _this.connectToUserEnabled = true;
                _this.disconnectFromUserEnabled = false;
                _this.onError(err);
            });
        }
    };
    FacilityHubConnectorComponent.prototype.onDisconnectFromUserClick = function (ev) {
        if (this.connectedToHub && this.connectedToUser) {
            this.connectionStatus = "Disconnecting from user: " + this.connectedUser.name;
            var hubMessage = {
                to: this.connectedUser.connectionId,
                from: this.localUser,
                message: null
            };
            this.hubConnection.invoke("DisconnectFromUser", hubMessage);
        }
    };
    FacilityHubConnectorComponent.prototype.onUserClicked = function (user) {
        if (this.connectedToHub && !this.connectedToUser && !user.connectedToOtherUsers) {
            this.selectedUser = user;
            if (this.selectedUser != null) {
                this.connectToUserEnabled = true;
            }
        }
    };
    FacilityHubConnectorComponent.prototype.onError = function (error) {
        if (error.message.indexOf("HubException:") > 0) {
            var errorMessage = error.message.split("HubException:")[1];
            this.toastr.error(errorMessage, "Error!");
        }
        else {
            this.toastr.error("An error occured while processing your request.", "Error!");
        }
    };
    FacilityHubConnectorComponent.prototype.sendMessage = function (message) {
        if (this.connectedToUser) {
            var hubMessage = {
                to: this.connectedUser.connectionId,
                from: this.localUser,
                message: JSON.stringify(message)
            };
            this.hubConnection.invoke("SendMessage", hubMessage);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hubEndpoint'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FacilityHubConnectorComponent.prototype, "hubEndpoint", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('facilityId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", guid_typescript__WEBPACK_IMPORTED_MODULE_5__["Guid"])
    ], FacilityHubConnectorComponent.prototype, "facilityId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('allowDeviceUserConnections'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FacilityHubConnectorComponent.prototype, "allowDeviceUserConnections", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('allowWebUserConnections'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FacilityHubConnectorComponent.prototype, "allowWebUserConnections", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('allowConnectToUser'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FacilityHubConnectorComponent.prototype, "allowConnectToUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('connected'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FacilityHubConnectorComponent.prototype, "connected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('disconnected'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FacilityHubConnectorComponent.prototype, "disconnected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('messageReceived'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FacilityHubConnectorComponent.prototype, "messageReceived", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('userConnected'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FacilityHubConnectorComponent.prototype, "userConnected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('userDisconnected'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FacilityHubConnectorComponent.prototype, "userDisconnected", void 0);
    FacilityHubConnectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'facility-hub-connector',
            template: __webpack_require__(/*! ./facility-hub-connector.component.html */ "./src/app/facility-hub-connector/facility-hub-connector.component.html"),
            styles: [__webpack_require__(/*! ./facility-hub-connector.component.css */ "./src/app/facility-hub-connector/facility-hub-connector.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], FacilityHubConnectorComponent);
    return FacilityHubConnectorComponent;
}());



/***/ }),

/***/ "./src/app/services/signal-r.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/signal-r.service.ts ***!
  \**********************************************/
/*! exports provided: SignalRService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalRService", function() { return SignalRService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/signalr */ "./node_modules/@microsoft/signalr/dist/esm/index.js");



var SignalRService = /** @class */ (function () {
    function SignalRService() {
        var _this = this;
        this.startConnection = function () {
            _this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__["HubConnectionBuilder"]()
                .withUrl('https://localhost:5001/polar')
                .build();
            _this.hubConnection.start()
                .then(function () {
                console.log('Connection started');
                _this.subject = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                _this.hubConnection.send("UploadStream", _this.subject);
            })
                .catch(function (err) { return console.log('Error while starting connection: ' + err); });
        };
        this.addTransferListener = function () {
            _this.hubConnection.on('HeartRateReceived', function (data) {
                console.log(data);
            });
        };
        this.send = function (polarModel) {
            _this.subject.next(polarModel);
        };
        this.send2 = function (polarModel) {
            _this.hubConnection.send("UpdateHeartRate", polarModel);
        };
    }
    SignalRService.prototype.openStream = function () {
        this.hubConnection.send("UploadStream", this.subject);
    };
    SignalRService.prototype.closeStream = function () {
        this.subject.complete();
    };
    SignalRService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignalRService);
    return SignalRService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Crestron\Angular\AngularSandbox\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map