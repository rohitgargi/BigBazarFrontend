import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/models/category';
import { IProduct } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  constructor(private http: HttpClient) { }
  fetchCategories(): Observable<ICategory[]>{
    const params = new HttpParams()
    .set('page','1')
    .set('pageSize','10')
    return this.http.get<ICategory[]>("http://localhost:9000/fetch-category",{params});
  }
  fetchProducts(query?:any):Observable<IProduct[]>{
    const params = new HttpParams()
    .set('category',query?.category ? query.category:'')

    return this.http.get<IProduct[]>("http://localhost:9000/fetch-products",{params});
  }

  fetchAdminDetails(){
    return this.http.get("http://localhost:9000/admin")
  }

}
