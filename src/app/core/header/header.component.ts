import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('auth').subscribe((state)=>{
      this.isLoggedIn = state.isLoggedIn;
    })
  }

}
