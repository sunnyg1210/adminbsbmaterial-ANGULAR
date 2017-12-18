import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = {};
  profileForm = new FormGroup({
    username: new FormControl('sunny'),
    firstname: new FormControl('Sunny'),
    lastname: new FormControl('Gohil'),
    email: new FormControl('sunny@example.com')
  });
  resetPassForm = new FormGroup({
    newpass: new FormControl(),
    newpassconfirm: new FormControl()
  });
  passResetDisabled = [true, false];

  constructor(
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.resetPassForm.valueChanges.subscribe((data) => {
      if(data.newpass == data.newpassconfirm) {
        this.passResetDisabled[0] = false;
        this.passResetDisabled[1] = false;
        if (data.newpass == null || data.newpass == '' || data.newpassconfirm == null || data.newpassconfirm == '') {
          this.passResetDisabled[0] = true;
        }
      } else {
        this.passResetDisabled[0] = true;
        this.passResetDisabled[1] = true;
      }
    })
  }

  onSubmit() {
    this.flashMessage.show('User Profile Updated Successfully', {cssClass: 'bg-green animated fadeInDown', timeout: 2000});        
  }

  resetPassword() {
    if (this.resetPassForm.value.newpass == null || this.resetPassForm.value.newpass == '' || this.resetPassForm.value.newpassconfirm == null || this.resetPassForm.value.newpassconfirm == '') {
      this.flashMessage.show('Please fill in all required fields', {cssClass: 'bg-orange animated fadeInDown', timeout: 2000});
      return false;
    }
    this.flashMessage.show('Password Updated Successfully', {cssClass: 'bg-green animated fadeInDown', timeout: 2000});    
  }

}
