import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../interfaces/product'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL: string = 'http://localhost:3000';
  
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.BASE_URL}/product`)
  }

  getProduct(id: string):Observable<Product> {
    return this.httpClient.get<Product>(`${this.BASE_URL}/product/${id}`)
  }
  
  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.BASE_URL}/product`, product)
  }

  deleteProduct(id: string): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.BASE_URL}/product/${id}`)
  }
  updateProduct(id: string, producto: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.BASE_URL}/product?productId=${id}`, producto)
  }
}
