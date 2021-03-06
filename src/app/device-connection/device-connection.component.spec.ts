import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceConnectionComponent } from './device-connection.component';

describe('DeviceConnectionComponent', () => {
  let component: DeviceConnectionComponent;
  let fixture: ComponentFixture<DeviceConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
