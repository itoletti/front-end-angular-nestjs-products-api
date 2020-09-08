import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'; 
import { Product } from '../../interfaces/product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProducts()
    .subscribe(
      res => {
        console.log(res);
        this.products = res;
        console.log("Primer elemento",this.products)
      },
      err => console.log(err)
    )
  }

  deleteProduct(productId: string) {
    console.log(productId);
    this.productService.deleteProduct(productId)
      .subscribe(
      res => {
        this.getProducts()
      },
      err => console.log(err)
    )
  }
  
}
