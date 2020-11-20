import { Component, OnInit } from '@angular/core';
import { PC } from './PC';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  pcs: PC[] = [
  {
    marca:  "Amd" ,
    procesador:"A10-9700",
    memoria: "16gb Ddr4 2400mhz",
    placaVideo: "Radeon r7",
    almacenamiento: "1tb",
    fuente: "600w rgb",
    gabinete :"ATX SENTEY F10 RGB",
    extra: "teclado y mouse",
    precio: 56.9999,
    stock: 12,
    cantidad: 0,
    img: "../../assets/pc-amd-a10-16gb-1tb.jpg",
  },
  {
    marca:  "Amd" ,
    procesador:"A10-9700",
    memoria: "16gb Ddr4 2400mhz",
    placaVideo: "Radeon r7",
    almacenamiento: "1tb",
    fuente: "600w rgb",
    gabinete :"ATX SENTEY F10 RGB",
    extra: "teclado y mouse",
    precio: 56.9999,
    stock: 12,
    cantidad: 0,
    img: "../../assets/pc-amd-a10-16gb-1tb.jpg",
  }, 
  {
    marca:  "Amd" ,
    procesador:"A10-9700",
    memoria: "16gb Ddr4 2400mhz",
    placaVideo: "Radeon r7",
    almacenamiento: "1tb",
    fuente: "600w rgb",
    gabinete :"ATX SENTEY F10 RGB",
    extra: "RGB",
    precio: 56.9999,
    stock: 12,
    cantidad: 0,
    img: "../../assets/pc-amd-a10-16gb-1tb.jpg",
  },
   {
    marca:  "Amd" ,
    procesador:"A10-9700",
    memoria: "16gb Ddr4 2400mhz",
    placaVideo: "Radeon r7",
    almacenamiento: "1tb",
    fuente: "600w rgb",
    gabinete :"ATX SENTEY F10 RGB",
    extra: "teclado y mouse",
    precio: 56.9999,
    stock: 12,
    cantidad: 0,
    img: "../../assets/pc-amd-a10-16gb-1tb.jpg",
  }, 
  {
    marca:  "Amd" ,
    procesador:"A10-9700",
    memoria: "16gb Ddr4 2400mhz",
    placaVideo: "Radeon r7",
    almacenamiento: "1tb",
    fuente: "600w rgb",
    gabinete :"ATX SENTEY F10 RGB",
    extra: "teclado y mouse",
    precio: 56.9999,
    stock: 12,
    cantidad: 0,
    img: "../../assets/pc-amd-a10-16gb-1tb.jpg",
  },
   {
    marca:  "Amd" ,
    procesador:"A10-9700",
    memoria: "16gb Ddr4 2400mhz",
    placaVideo: "Radeon r7",
    almacenamiento: "1tb",
    fuente: "600w rgb",
    gabinete :"ATX SENTEY F10 RGB",
    extra: "teclado y mouse",
    precio: 56.9999,
    stock: 12,
    cantidad: 0,
    img: "../../assets/pc-amd-a10-16gb-1tb.jpg",
  },
   {
    marca:  "Amd" ,
    procesador:"A10-9700",
    memoria: "16gb Ddr4 2400mhz",
    placaVideo: "Radeon r7",
    almacenamiento: "1tb",
    fuente: "600w rgb",
    gabinete :"ATX SENTEY F10 RGB",
    extra: null,
    precio: 56.9999,
    stock: 12,
    cantidad: 0,
    img: "../../assets/pc-amd-a10-16gb-1tb.jpg",
  },
]
  constructor() { }

  ngOnInit(): void {
  }
  upQuantity(pc: PC): void{
    if(pc.cantidad < pc.stock){
      pc.cantidad++;
    }
  }
  downQuantity(pc: PC): void{
    if(pc.cantidad > 0){
      pc.cantidad--;
    }
  }
  onChangeQuantity(event, pc:PC): void{
    console.log(event)
  }
}
