import { Component, OnInit } from '@angular/core';
import { Config } from '../../../../classes/config';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.css']
})
export class NavbarLeftComponent implements OnInit {

  appInfo: any = Config.APP;

  constructor() { }

  ngOnInit() {
  }

}
