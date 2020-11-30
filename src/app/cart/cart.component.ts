import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PC } from '../car-list/PC';
import { ProductsCarService } from '../products-car.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<PC[]>;

  constructor(private cart: ProductsCarService) { 
    this.cartList$ = cart.cartList.asObservable();
  }
  ngOnInit(): void {
  }
  
}
