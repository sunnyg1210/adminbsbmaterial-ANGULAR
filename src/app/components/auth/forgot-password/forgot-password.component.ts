import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('fp-page');
  }

  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove('fp-page');    
  }

}
