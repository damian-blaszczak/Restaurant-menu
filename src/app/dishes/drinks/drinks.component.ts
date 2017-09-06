import { Component, OnInit } from '@angular/core';
import { OrdersService, Dish } from '../../orders.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  public drinks: Dish[];

  constructor(public orders: OrdersService) { }

  ngOnInit() {
    this.drinks = [
       {name: 'Woda', img: '../../assets/img/woda.jpg', price: 5},
       {name: 'Lemoniada', img: '../../assets/img/lemoniada.jpg', price: 12},
       {name: 'Lokalne piwo', img: '../../assets/img/piwo.jpg', price: 8},
       {name: 'Fanta', img: '../../assets/img/fanta.jpg', price: 7},
       {name: 'Coca-cola', img: '../../assets/img/cola.jpg', price: 7},
       {name: 'Sprite', img: '../../assets/img/sprite.png', price: 7}
    ];
  }

}
