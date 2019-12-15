import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;

  constructor() { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => this.isAuth = !!user);
  }

  logout() {
    firebase.auth().signOut();
  }
}
