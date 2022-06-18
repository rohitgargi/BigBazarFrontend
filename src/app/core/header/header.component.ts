import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$:Observable<boolean> | undefined
  constructor(private store: Store<{loggedIn:boolean}>) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select('loggedIn')
  }

}
