import { Component } from '@angular/core';
import * as firebase from 'firebase';
import {firebaseConfig} from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
