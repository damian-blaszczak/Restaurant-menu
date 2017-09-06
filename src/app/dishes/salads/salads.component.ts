import { Component, OnInit } from '@angular/core';
import { OrdersService, Dish } from '../../orders.service';

@Component({
  selector: 'app-salads',
  templateUrl: './salads.component.html',
  styleUrls: ['./salads.component.css']
})
export class SaladsComponent implements OnInit {

  public salads: Dish[];

  constructor(public orders: OrdersService) { }

  ngOnInit() {
    this.salads = [
      {
        name: 'Sałatka królewska',
        img: '../../assets/img/krolewska.jpg',
        description: 'Grillowane kawałki kurczaka na mieszanej sałacie z kawałkami pomidora, ogórka oraz grzanek oprószone prażonym słoneczkiem w sosie vinaigrette.',
        price: 12
      },
      { name: 'Sałatka chili beef', img: '../../assets/img/chili.jpg', description: 'Chrupiąca polędwica wołowa z grilla z dodatkiem tabasco podana na bukiecie sałat z marynowanym czosnkiem, papryką, kolbami kukurydzy, grzankami i sosem vinaigrette.', price: 10 },
      { name: 'Sałatka neapolitańska', img: '../../assets/img/neapolitanska.jpg', description: 'Podawana z przepysznymi pomidorkami confit w towarzystwie czarnych oliwek, mini mozzarelli oraz grzanek. Całość sprószona płatkami chabrów.', price: 12 },
      { name: 'Sałatka z grillowanym łososiem', img: '../../assets/img/z_lososiem.jpg', description: 'Grillowany filet z łososia w miksie sałat z dodatkiem cykorii, sera camembert i pomarańczy wraz z grzankami i sosem vinaigrette z tymiankiem.', price: 10 },
      { name: 'Sałatka cezara', img: '../../assets/img/cezar.jpg', description: 'Połączenie kruchej sałaty lodowej z cykorią, grillowanym kurczakiem, cząstkami soczystego pomidora. Całość oprószona wiórkami parmezanu i grzankami, skropiona sosem cezar.', price: 15 },
      { name: 'Sałatka z gruszkami', img: '../../assets/img/z_gruszkami.jpg', description: 'Starannie pokrojone gruszki w towarzystwie orzechów włoskich, mandarynek oraz pomidorów cherry, z dodatkiem liofilizowanego groszku i płatków róży.', price: 10 }
    ];
  }
}
