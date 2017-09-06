import { Component, OnInit } from '@angular/core';
import { OrdersService, Dish } from '../../orders.service';

@Component({
  selector: 'app-soups',
  templateUrl: './soups.component.html',
  styleUrls: ['./soups.component.css']
})
export class DishesComponent implements OnInit {

  public soups: Dish[];

  constructor(public orders: OrdersService) { }

  ngOnInit() {
    this.soups = [
    {
      name: 'BARSZCZ',
      price: 6,
      img: '../../assets/img/barszcz.jpg',
      description: 'Barszcz czerwony ze świeżych buraczków.'
  },
    {
      name: 'ROSÓŁ',
      price: 5,
      img: '../../assets/img/rosol.jpg',
      description: 'Rosół z makaronem naleśnikowym.'
  },
    {
      name: 'CHŁODNIK',
      price: 5,
      img: '../../assets/img/chlodnik.jpg',
      description: 'Chłodnik z jajkiem, ogórkiem, rzodkiewką i koprem.'
  },
    {
      name: 'PIKANTNA',
      price: 5,
      img: '../../assets/img/pikantna.jpg',
      description: 'Pikantna z krewetkami i kolendrą.'
  },
    {
      name: 'KREM ZE SZPINAKU',
      price: 6,
      img: '../../assets/img/krem_szpinak.jpg',
      description: 'Krem ze szpinaku z serem śmietankowym i grzankami.'
  },
    {
      name: 'KREM Z BOROWIKÓW',
      price: 6,
      img: '../../assets/img/krem_borowiki.jpg',
      description: 'Krem z borowików w chlebie.'
  }
  ];
  }
}
