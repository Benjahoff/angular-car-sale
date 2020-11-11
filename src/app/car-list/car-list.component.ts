import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  car = {
    "marca": "Ford",
    "nombre" : "Focus",
    "modelo" : "2011",
    "km" : "180.000" ,
    "img" : "/assets/ford-focus-2011.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
