import { Component, OnInit, Injectable } from '@angular/core';
import { OrdersService, Dish } from '../../orders.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {

  public desserts: Dish[];

  constructor(private orders: OrdersService) { }

  ngOnInit() {
    this.desserts = [
       {name: 'Szarlotka', img: '../../assets/img/szarlotka.jpg', description: 'Szarlotka ze świeżych jabłek.', price: 5},
       {name: 'Tort bezowy', img: '../../assets/img/tort_bezowy.jpg', price: 12},
       {name: 'Tiramisu', img: '../../assets/img/tiramisu.jpeg', price: 8},
       {name: 'Mus truskawkowy', img: '../../assets/img/mus_truskawkowy.jpg', price: 7},
       {name: 'Suflet czekoladowy', img: '../../assets/img/suflet.jpg', price: 7},
       {name: 'Sernik', img: '../../assets/img/sernik.jpg', price: 7}
    ];

//      this.orders.fetchDishes().then(response => this.dishes = response);

// setTimeout(() => { console.log(this.dishes); }, 10);


  //     this.orders.fetchDishes();
  //  setTimeout(() => { console.log(this.orders.dishes[0].name);

  // }, 10);
  }

}
