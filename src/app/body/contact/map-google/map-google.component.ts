import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map-google',
  templateUrl: './map-google.component.html',
  styleUrls: ['./map-google.component.css']
})
export class MapGoogleComponent implements OnInit {
  lat = 52.227674;
  lng = 21.001961;
  constructor() { }

  ngOnInit() {
  }

}

