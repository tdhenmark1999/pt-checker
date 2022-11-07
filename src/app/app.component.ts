import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Subscription} from 'rxjs';
import {environment} from '../environments/environment';
import {EnvService} from './services/env.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PT Checker';
  fullNameChangeSub = new Subscription();
  fullName = '';
  loginUrl = environment.loginUrl;


  constructor(private auth: AuthService, private env: EnvService) {
    this.loginUrl = this.env.loginUrl;
  }

  ngOnInit() {
    this.fullNameChangeSub = this.auth.nameChanged.subscribe(n => this.fullName = n);
  }

}
