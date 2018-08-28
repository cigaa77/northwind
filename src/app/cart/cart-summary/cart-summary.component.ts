import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from './../cart.service'
import { CartItem } from './../cart-item'

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit, DoCheck {

  constructor(private cartService: CartService) { }

  totalCartItem: number;
  totalCartItemPrice: number;
  cartItem:CartItem[];

  ngOnInit() {
    this.cartItem=this.cartService.list();
    // this.totalNumber = this.cartService.list().reduce((a, b) => a + b.quantity, 0);
    // this.totalCartItemPrice = this.cartService.list().reduce((a, b) => a + b.quantity * b.product.unitPrice, 0);
  }
  ngDoCheck() {
    this.totalCartItem = this.cartService.list().reduce((a, b) => a + b.quantity, 0);
    this.totalCartItemPrice = this.cartService.list().reduce((a, b) => a + b.quantity * b.product.unitPrice, 0);
  }

}
