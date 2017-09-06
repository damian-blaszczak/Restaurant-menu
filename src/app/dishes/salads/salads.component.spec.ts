import { OrdersService } from './../../orders.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SaladsComponent } from './salads.component';

describe('SaladsComponent', () => {
  let component: SaladsComponent;
  let fixture: ComponentFixture<SaladsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SaladsComponent ],
      providers: [ OrdersService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {;
    expect(component).toBeTruthy();
  });

  it('should contain name, description and price', () => {
    expect(component.salads[0].name).not.toEqual('');
    expect(component.salads[0].description).not.toEqual('');
    expect(component.salads[0].price).not.toEqual(null);

    expect(component.salads[1].name).not.toEqual('');
    expect(component.salads[1].description).not.toEqual('');
    expect(component.salads[1].price).not.toEqual(null);

    expect(component.salads[2].name).not.toEqual('');
    expect(component.salads[2].description).not.toEqual('');
    expect(component.salads[2].price).not.toEqual(null);

    expect(component.salads[3].name).not.toEqual('');
    expect(component.salads[3].description).not.toEqual('');
    expect(component.salads[3].price).not.toEqual(null);

    expect(component.salads[4].name).not.toEqual('');
    expect(component.salads[4].description).not.toEqual('');
    expect(component.salads[4].price).not.toEqual(null);

    expect(component.salads[5].name).not.toEqual('');
    expect(component.salads[5].description).not.toEqual('');
    expect(component.salads[5].price).not.toEqual(null);
  });
});
