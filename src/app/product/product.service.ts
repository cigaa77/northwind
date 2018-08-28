import { Injectable, Inject } from '@angular/core';
import { Product } from './product';
//import { ProductList } from './product-list.mock';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http, @Inject('apiUrl') private apiUrl) { }

  getProducts(seoUrl: string): Observable<Product[]> {
    if (seoUrl) {
      return this.http.get(/*"http://northwindapi.azurewebsites.net/api*/ this.apiUrl
        + "/products/" + seoUrl)
        .pipe(map(response => response.json()));
    }
    else {
      return this.http.get(/*"http://northwindapi.azurewebsites.net/api*/ this.apiUrl
        + "/products")
        .pipe(map(response => response.json()));
    }
  }
}
