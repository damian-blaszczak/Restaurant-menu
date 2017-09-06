import { OrdersService, Dish } from './../../orders.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DessertsComponent } from './desserts.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DessertsComponent', () => {
  let component: DessertsComponent;
  let fixture: ComponentFixture<DessertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [DessertsComponent],
      providers: [OrdersService]
    });
    TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DessertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain name, description and price', () => {
    expect(component.desserts[0].name).not.toEqual('');
    expect(component.desserts[0].description).not.toEqual('');
    expect(component.desserts[0].price).not.toEqual(null);

    expect(component.desserts[1].name).not.toEqual('');
    expect(component.desserts[1].description).not.toEqual('');
    expect(component.desserts[1].price).not.toEqual(null);

    expect(component.desserts[2].name).not.toEqual('');
    expect(component.desserts[2].description).not.toEqual('');
    expect(component.desserts[2].price).not.toEqual(null);

    expect(component.desserts[3].name).not.toEqual('');
    expect(component.desserts[3].description).not.toEqual('');
    expect(component.desserts[3].price).not.toEqual(null);

    expect(component.desserts[4].name).not.toEqual('');
    expect(component.desserts[4].description).not.toEqual('');
    expect(component.desserts[4].price).not.toEqual(null);

    expect(component.desserts[5].name).not.toEqual('');
    expect(component.desserts[5].description).not.toEqual('');
    expect(component.desserts[5].price).not.toEqual(null);
  });
});
