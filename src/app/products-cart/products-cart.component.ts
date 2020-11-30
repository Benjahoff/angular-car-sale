import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PC } from '../product-list/PC';
import { ProductsCartService } from '../products-cart.service';


@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.scss']
})
export class ProductsCartComponent implements OnInit {

  cartList$: Observable<PC[]>;

  constructor(private cart: ProductsCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }
  ngOnInit(): void {
  }

}
