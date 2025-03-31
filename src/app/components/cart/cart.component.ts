import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cartProducts = this.productService.getCartProducts();
  }

  clearCart() {
    this.productService.clearCart();
    this.cartProducts = [];
  }

}
