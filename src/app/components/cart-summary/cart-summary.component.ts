import { Component, OnInit } from '@angular/core';
import { CartItems } from '../../models/cartItem';
import { CartItem } from '../../models/cartItems';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit {

  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private toasterService:ToastrService) { }
    ngOnInit(): void{

    }
  getCart(){
    this.cartItems = this.cartService.list();
  }
  removeFromCart(product: Product){
    this.cartService.removeFromCart(product);
    this.toasterService.error("Silindi",product.productName + " sepetten silindi");
  }
}
