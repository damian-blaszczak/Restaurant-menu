import { OrdersService } from './../../orders.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DrinksComponent } from './drinks.component';

describe('DrinksComponent', () => {
  let component: DrinksComponent;
  let fixture: ComponentFixture<DrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ DrinksComponent ],
      providers: [ OrdersService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain name, description and price', () => {
    expect(component.drinks[0].name).not.toEqual('');
    expect(component.drinks[0].description).not.toEqual('');
    expect(component.drinks[0].price).not.toEqual(null);

    expect(component.drinks[1].name).not.toEqual('');
    expect(component.drinks[1].description).not.toEqual('');
    expect(component.drinks[1].price).not.toEqual(null);

    expect(component.drinks[2].name).not.toEqual('');
    expect(component.drinks[2].description).not.toEqual('');
    expect(component.drinks[2].price).not.toEqual(null);

    expect(component.drinks[3].name).not.toEqual('');
    expect(component.drinks[3].description).not.toEqual('');
    expect(component.drinks[3].price).not.toEqual(null);

    expect(component.drinks[4].name).not.toEqual('');
    expect(component.drinks[4].description).not.toEqual('');
    expect(component.drinks[4].price).not.toEqual(null);

    expect(component.drinks[5].name).not.toEqual('');
    expect(component.drinks[5].description).not.toEqual('');
    expect(component.drinks[5].price).not.toEqual(null);
  });
});
