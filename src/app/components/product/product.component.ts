import { FilterPipe } from '../../pipes/filter-pipe.pipe';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { VatAddedPipe } from '../../pipes/vat-added.pipe';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, VatAddedPipe, FilterPipe],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded: boolean = false;
  filterText: string = "";
  searchText: string = "";

  constructor(
    private productService: ProductService, 
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService 
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params["categoryId"]) {
        this.getProductsByCategoryId(params["categoryId"]);
      } else {
        this.getProducts();
      }
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((response: any) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategoryId(categoryId: number) {
    this.productService.getProductsByCategoryId(categoryId).subscribe((response: any) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }


  addToCart(product: Product) {
    if ( product.productId === 1) {
      this.toastrService.error("Hata ! Bu ürün sepete eklenemez.");
    }else {
      this.toastrService.success("Ürün sepete eklendi.",product.productName);
      this.cartService.addToCart(product);
    }
  }
}