import { Component, OnInit } from '@angular/core';
import { Config } from '../../classes/config';
import { ThemeHelpersService } from '../../helpers/theme-helpers/theme-helpers.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

  constructor(
    public themeHelper: ThemeHelpersService
  ) { }

  ngOnInit() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add(Config.THEME.views);
  }

  ngAfterViewInit() {
    this.themeHelper.viewsActivate();
  }

  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove(Config.THEME.views);
  }

}
