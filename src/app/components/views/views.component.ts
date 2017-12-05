import { Component, OnInit } from '@angular/core';
import { Config } from '../../classes/config';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add(Config.THEME.views);
  }

  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove(Config.THEME.views);
  }

}
