import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('four-zero-four');
  }

  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove('four-zero-four');    
  }

}
