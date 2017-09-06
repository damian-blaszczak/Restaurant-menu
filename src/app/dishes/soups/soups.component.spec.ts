import { OrdersService } from './../../orders.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DishesComponent } from './soups.component';

describe('DishesComponent', () => {
  let component: DishesComponent;
  let fixture: ComponentFixture<DishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ DishesComponent ],
      providers: [ OrdersService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain name, description and price', () => {
    expect(component.soups[0].name).not.toEqual('');
    expect(component.soups[0].description).not.toEqual('');
    expect(component.soups[0].price).toBeGreaterThan(0);

    expect(component.soups[1].name).not.toEqual('');
    expect(component.soups[1].description).not.toEqual('');
    expect(component.soups[1].price).not.toEqual(null);

    expect(component.soups[2].name).not.toEqual('');
    expect(component.soups[2].description).not.toEqual('');
    expect(component.soups[2].price).not.toEqual(null);

    expect(component.soups[3].name).not.toEqual('');
    expect(component.soups[3].description).not.toEqual('');
    expect(component.soups[3].price).not.toEqual(null);

    expect(component.soups[4].name).not.toEqual('');
    expect(component.soups[4].description).not.toEqual('');
    expect(component.soups[4].price).not.toEqual(null);

    expect(component.soups[5].name).not.toEqual('');
    expect(component.soups[5].description).not.toEqual('');
    expect(component.soups[5].price).not.toEqual(null);
  });
});
