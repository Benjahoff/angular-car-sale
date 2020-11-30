import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PC } from './car-list/PC';

@Injectable({
  providedIn: 'root'
})

export class ProductsCarService {
  
  private _cartList: PC[] = [] ;

  cartList: BehaviorSubject<PC[]> = new BehaviorSubject([]);

  addToCart(PC: PC) {
    let item: PC = this._cartList.find((v1) => v1.procesador == PC.procesador)
    if(!item){
      this._cartList.push({... PC});
    }else{
     item.cantidad += PC.cantidad; 
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
    
  }

  constructor() { }
}
