import { Component, OnInit } from '@angular/core';
import { ICategory } from '../models/category';
import { AppConstants } from '../shared/constants/constants';
import { FetchApiService } from '../shared/services/fetch-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rootUrl!: string;
  categories!: ICategory[];

  constructor(private http: FetchApiService) { }

  ngOnInit(): void {
    this.rootUrl = AppConstants.rootUrl;
    this.http.fetchCategories().subscribe((res) =>{
      this.categories = res;
      console.log(typeof(res))
    });
  }

}
