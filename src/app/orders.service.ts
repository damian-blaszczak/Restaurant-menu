import { Http, Response } from '@angular/http';
import { Dish } from './orders.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrdersService {

  dishes = {};

  constructor(private http: Http) { }

  addToOrderList(dish: Dish) {
    if (!this.dishes[dish.name]) {
      this.dishes[dish.name] = { dish: dish, amount: 1 };
    } else {
      this.dishes[dish.name].amount++;
    }
  }
  getDishes(): OrderedDish[] {
    return Object.keys(this.dishes).map(name => this.dishes[name]);
  }

  removeDish(dish: Dish) {
    if (!this.dishes[dish.name]) {
    } else {
      this.dishes[dish.name].amount--;
      if (this.dishes[dish.name].amount <= 0) {
        delete this.dishes[dish.name];
      }
    }
  }

  deleteDish(dish: Dish) {
    delete this.dishes[dish.name];
  }

  deleteAllDishes(dish: Dish) {
    return this.dishes = [];
  }

  totalCost(): number {
    return this.getDishes()
      .reduce((sum, orderedDish) => sum + orderedDish.amount * orderedDish.dish.price, 0);
  }

  myAlert() {
    if (this.totalCost() === 0) {
      alert('Proszę wybrać danie.');
    } else {
      alert('Zamówienie złożone, czas oczekiwania: 15min. Dziękujemy za wybór naszej restauracji :) \n Suma zamówienia: '
        + this.totalCost() + ' zł.');
    }
  }


}


export interface Dish {
  img: string;
  name: string;
  price: number;
  description?: string;
}


export interface OrderedDish {
  dish: Dish;
  amount: number;
}
