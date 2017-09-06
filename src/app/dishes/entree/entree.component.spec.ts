import { DrinksComponent } from './../drinks/drinks.component';
import { OrdersService } from './../../orders.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EntreeComponent } from './entree.component';

describe('EntreeComponent', () => {
  let component: EntreeComponent;
  let fixture: ComponentFixture<EntreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ EntreeComponent ],
      providers: [ OrdersService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain name, description and price', () => {
    expect(component.entree[0].name).not.toEqual('');
    expect(component.entree[0].description).not.toEqual('');
    expect(component.entree[0].price).not.toEqual(null);

    expect(component.entree[1].name).not.toEqual('');
    expect(component.entree[1].description).not.toEqual('');
    expect(component.entree[1].price).not.toEqual(null);

    expect(component.entree[2].name).not.toEqual('');
    expect(component.entree[2].description).not.toEqual('');
    expect(component.entree[2].price).not.toEqual(null);

    expect(component.entree[3].name).not.toEqual('');
    expect(component.entree[3].description).not.toEqual('');
    expect(component.entree[3].price).not.toEqual(null);

    expect(component.entree[4].name).not.toEqual('');
    expect(component.entree[4].description).not.toEqual('');
    expect(component.entree[4].price).not.toEqual(null);

    expect(component.entree[5].name).not.toEqual('');
    expect(component.entree[5].description).not.toEqual('');
    expect(component.entree[5].price).not.toEqual(null);
  });
});
