import { Component, OnInit } from '@angular/core';
import { Config } from '../../classes/config';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add(Config.THEME.landing, Config.THEME.landing_bgcolor);
  }

  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove(Config.THEME.landing, Config.THEME.landing_bgcolor);
  }

}
