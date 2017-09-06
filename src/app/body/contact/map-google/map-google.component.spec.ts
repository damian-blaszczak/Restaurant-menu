import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapGoogleComponent } from './map-google.component';

describe('MapGoogleComponent', () => {
  let component: MapGoogleComponent;
  let fixture: ComponentFixture<MapGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapGoogleComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('lat should be equal to 52.185607', () => {
    expect(component.lat).toEqual(52.185607);
  });

  it('lng should be equal to 21.003328', () => {
    expect(component.lng).toEqual(21.003328);
  });
});
