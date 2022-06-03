import { Component, OnInit } from '@angular/core';
import { FetchApiService } from 'src/app/shared/services/fetch-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  statusText = "This page is only authorize if user is authenticated";

  constructor(private fetchApi : FetchApiService) { }

  ngOnInit(): void {
    this.fetchApi.fetchAdminDetails().subscribe((res:any)=>{
      // code here
      console.log("Final Resoonse", res);
      if(res.admin){
        this.statusText = 'Authenticated as ADMIN User';
      }
      
    })
  }

}
