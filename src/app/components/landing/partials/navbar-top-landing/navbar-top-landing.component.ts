import { Component, OnInit } from '@angular/core';
import { Config } from '../../../../classes/config';

@Component({
  selector: 'app-navbar-top-landing',
  templateUrl: './navbar-top-landing.component.html',
  styleUrls: ['./navbar-top-landing.component.css']
})
export class NavbarTopLandingComponent implements OnInit {

  title: String = Config.APP.title;

  constructor() { }

  ngOnInit() {
  }

}
