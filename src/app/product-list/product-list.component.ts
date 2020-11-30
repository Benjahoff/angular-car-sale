import { Component, OnInit } from '@angular/core';
import { ProductsCartService } from '../products-cart.service';
import { PC } from './PC';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

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
      img: "https://http2.mlstatic.com/D_NQ_NP_856328-MLA42504174757_072020-O.webp",
    },
    {
      marca:  "Intel" ,
      procesador:"i5-9400k",
      memoria: "32gb Ddr4 3200mhz",
      placaVideo: "Nvidia Gforce 2080",
      almacenamiento: "1tb, ssd 480gb",
      fuente: "1200w rgb",
      gabinete :"Vidrio templado",
      extra: "Windows 10",
      precio: 200.000,
      stock: 3,
      cantidad: 0,
      img: "https://images.g2a.com/newlayout/470x470/1x1x0/c2b174a9550a/5e5982d346177c1d0204ad23",
    }, 
    {
      marca:  "Amd" ,
      procesador:"A8-9600 10 Nucleos",
      memoria: "8gb Ddr4 HP",
      placaVideo: "Radeon Vega 3",
      almacenamiento: "1tb",
      fuente: "600w rgb",
      gabinete :"Generico con rgb",
      extra: null,
      precio: 44.999,
      stock: 3,
      cantidad: 0,
      img: "https://http2.mlstatic.com/D_NQ_NP_619277-MLA42094714658_062020-O.webp",
    },
     {
      marca:  "Amd" ,
      procesador:"Ryzen 7 3800xt",
      memoria: "32gb Ddr4 3200mhz",
      placaVideo: "Gtx 1660 6gb",
      almacenamiento: "Ssd 480gb",
      fuente: "600w rgb",
      gabinete :"Thermaltake RGB 700w",
      extra: null,
      precio: 199.999,
      stock: 1,
      cantidad: 0,
      img: "https://http2.mlstatic.com/D_NQ_NP_708926-MLA43645486153_102020-O.webp",
    }, 
    {
      marca:  "Intel" ,
      procesador:"I9 9900kf",
      memoria: " 32Gb DDR4",
      placaVideo: "Rtx 2080ti",
      almacenamiento: "1tb",
      fuente: "Fuente de alimentación 650w",
      gabinete :"Gabinete Sentey K20",
      extra: null,
      precio: 421.442,
      stock: 3,
      cantidad: 0,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_796783-MLA31075807429_062019-F.webp",
    },
     {
      marca:  "Amd" ,
      procesador:"Ryzen 7 3800xt",
      memoria: "32gb Ram HyperX, Kingston",
      placaVideo: "Gtx 1660",
      almacenamiento: "Ssd 480gb",
      fuente: "Fuente de alimentación Gamin",
      gabinete :"Gabinete Gamer Xigmatek",
      extra: "teclado y mouse",
      precio: 53.000,
      stock: 1,
      cantidad: 0,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_986799-MLA31007870816_062019-F.webp",
    },
     {
      marca:"amd",
      procesador:"Ryzen 7 3800xt",
      memoria:"32gb Ram HyperX, Kingston",
      placaVideo: "Gtx 1660",
      almacenamiento: "Ssd 480gb",
      fuente: "smart rgb 700w",
      gabinete:"Gabinete Gamer Xigmatek",
      extra: "Fortnite instalado",
      precio:39000,
      stock: 200,
      cantidad: 0,
      img: "https://http2.mlstatic.com/D_NQ_NP_672418-MLA43645399870_102020-O.webp",
    },
  ];

  constructor(private cart: ProductsCartService) { }

  ngOnInit(): void {
  }
  addToCart(PC): void {
    if(PC.cantidad > 0){
    this.cart.addToCart(PC);
    PC.stock -= PC.cantidad;
    PC.cantidad = 0;
    }
    else{
      alert("Necesita un minimo de un producto para comprar")
    }
  }
  maxReached(mensaje:string){
    alert(mensaje);
  }
}
