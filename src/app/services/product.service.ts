import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductListResponseModel } from 'src/app/models/productListResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'https://localhost:44343/api/Products/getAll';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ProductListResponseModel> {
    return this.httpClient.get<ProductListResponseModel>(this.apiUrl);
  }
}
