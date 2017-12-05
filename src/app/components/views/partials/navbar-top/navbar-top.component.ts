import { Component, OnInit } from '@angular/core';
import { Config } from '../../../../classes/config';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {

  title: String = Config.APP.title;

  constructor() { }

  ngOnInit() {
  }

}
