import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from './category'

@Injectable(
  /*{
  providedIn: 'root'
}*/
)
export class CategoryService {

  constructor(private http: Http, @Inject("apiUrl") private apiUrl) { }

  url: string = this.apiUrl + "/categories";

  getCategories():Observable<Category[]>{
    return this.http.get("http://northwindapi.azurewebsites.net/api/categories")
    .pipe(map(response=>response.json()));
  }

}