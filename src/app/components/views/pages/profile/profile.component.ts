import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = {};
  profileForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl()
  });
  resetPassForm = new FormGroup({
    newpass: new FormControl(),
    newpassconfirm: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}
