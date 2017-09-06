import { Dish, OrdersService } from './orders.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Menu MDDD';
// orders: OrdersService;
  constructor(private orders: OrdersService) {
    this.orders = orders;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {  }
}
