import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public imageSources: string[] = [
    '../../../../assets/images/a.jpeg',
    '../../../../assets/images/b.jpg',
    '../../../../assets/images/c.jpg'
 ];

 public describes: string[] = [
   '50% zniżki na dania główne w każdy wtorek!',
   '25% taniej dla posiadaczy karty stałego klienta!',
   'Przy zakupie dwóch dań głównych, dowolny napój gratis!'
 ];

  constructor() { }

  ngOnInit() {
  }

}
