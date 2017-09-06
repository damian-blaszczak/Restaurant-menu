import { Component, OnInit } from '@angular/core';
import { OrdersService, Dish, OrderedDish} from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  dishes: any;

  constructor( private order: OrdersService ) { }

  ngOnInit() {
  }

  getOrders(): OrderedDish[] {
    return this.order.getDishes();
  }

  addDish(dish: Dish) {
    this.order.addToOrderList(dish);
  }

  removeDish(dish: Dish) {
    this.order.removeDish(dish);
  }

  deleteDish(dish: Dish) {
    this.order.deleteDish(dish);
  }

  deleteAllDishes(dish: Dish) {
    this.order.deleteAllDishes(dish);
  }

  totalCost(): number {
    return this.order.totalCost();
  }

  myAlert() {
    this.order.myAlert();
  }

}

