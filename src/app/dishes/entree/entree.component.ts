import { Component, OnInit } from '@angular/core';
import { OrdersService, Dish } from '../../orders.service';

@Component({
  selector: 'app-entree',
  templateUrl: './entree.component.html',
  styleUrls: ['./entree.component.css']
})
export class EntreeComponent implements OnInit {

  public entree: Dish[];

  constructor(public orders: OrdersService) { }

  ngOnInit() {
    this.entree = [
    { name: 'STEK Z ROSTBEFU', price: 20, img: '../../assets/img/stek.jpg', description: 'Stek z rostbefu 300g z ziemniakami opiekanymi, warzywami z grilla, cieciorką i dipem jogurtowym.'},
    { name: 'PSTRĄG SMAŻONY', price: 35, img: '../../assets/img/pstrag.jpg', description: 'Pstrąg smażony z masłem czosnkowym, ziemniakami i kruchymi sałatami.'},
    { name: 'SMAŻONA PIERŚ Z KURCZAKA', price: 10, img: '../../assets/img/kurczak.jpg', description: 'Smażona pierś kurczaka marynowana w estragonie z domowymi kopytkami, grzybami sezonowymi i fasolą szparagową.'},
    { name: 'KORONA Z ŻEBEREK WIEPRZOWYCH', price: 18, img: '../../assets/img/korona.jpg', description: 'Korona z żeberek wieprzowych z sosem barbecue, grillowaną kolbą kukurydzy, ziemniakami opiekanymi i jarmużem.'},
    { name: 'KOTLET SCHABOWY', price: 8, img: '../../assets/img/schabowy.jpg', description: 'Kotlet schabowy z kapustą zasmażaną i opiekanymi ziemniakami.'},
    { name: 'PLACKI ZIEMNIACZANE', price: 10, img: '../../assets/img/placki.jpg', description: 'Placki ziemniaczane z gulaszem wieprzowym i kwaśną śmietaną.'}
  ];
  }

}
