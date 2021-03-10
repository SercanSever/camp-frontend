import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { ProductListResponseModel } from 'src/app/models/productListResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  apiUrl: string = 'https://localhost:44343/api/Products/getAll';
  //productListResponseModel:ProductListResponseModel={};
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    console.log('Init çalıştı');
  }

  getProducts() {
    this.httpClient.get<ProductListResponseModel>(this.apiUrl);
  }
}
