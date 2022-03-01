import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityHubConnectorComponent } from './facility-hub-connector.component';

describe('FacilityHubConnectorComponent', () => {
  let component: FacilityHubConnectorComponent;
  let fixture: ComponentFixture<FacilityHubConnectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityHubConnectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityHubConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
