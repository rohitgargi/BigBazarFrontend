import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from '../models/category';
import { IProduct } from '../models/product';
import { AppConstants } from '../shared/constants/constants';
import { FetchApiService } from '../shared/services/fetch-api.service';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  dropdownDefaultVal!:any;
  selectedCategory!:any;
  productCategory!: ICategory[];
  products!:IProduct[];
  rootUrl ='';

  constructor(private http: FetchApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route)
    this.rootUrl = AppConstants.rootUrl;
    this.http.fetchCategories().subscribe(res=>{
      this.productCategory = res;
    });

    this.http.fetchProducts().subscribe(res=>{
      this.products = res;
    });
  
  }

  getFilteredProducts(category:ICategory){
    this.selectedCategory = category;
    this.dropdownDefaultVal = category.id;
    const categoryId = category.id;
    this.fetchFilteredProducts(categoryId);
  }

  fetchFilteredProducts(categoryId:any){
    this.http.fetchProducts({category: categoryId}).subscribe(res=>{
      this.products = res;
    })
  }

  onChangeFilter(categorySelected:any){
    console.log("dropdownDefaultVal",this.dropdownDefaultVal)
    console.log("categorySelected",categorySelected)
    const selectedCategory = this.productCategory.filter(val=>{
      return val.id === categorySelected.value;
    })[0];
    this.selectedCategory = selectedCategory ;
    console.log(this.selectedCategory)
    this.fetchFilteredProducts(categorySelected.value);
    
  }

}
