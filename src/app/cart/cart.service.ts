import { Injectable } from '@angular/core';
import { Product } from 'src/app/product/product'
import { CartItem } from './cart-item'
import { CART_ITEM_LIST } from './cart-item-list'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product: Product): void {
    var addedItem = CART_ITEM_LIST.find(t => t.product.productId == product.productId);

    if (addedItem) {
      addedItem.quantity += 1;
    }
    else {
      let cartItem = new CartItem();
      cartItem.quantity = 1;
      cartItem.product = product;
      CART_ITEM_LIST.push(cartItem);
    }
  }

  list(): CartItem[] {
    return CART_ITEM_LIST;
  }

  clear() {
    CART_ITEM_LIST.splice(0, CART_ITEM_LIST.length);
  }

  removeFromCart(product: Product) {
    var addeItem = CART_ITEM_LIST.find(t => t.product.productId == product.productId);
    var indexNo = CART_ITEM_LIST.indexOf(addeItem);

    if (indexNo != -1) {
      CART_ITEM_LIST.splice(indexNo, 1);
    }
  }

}
