import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
  }

  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');    
  }

}
