import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  showPassword: boolean = false;

  constructor() {
  }

  onSubmit(form: NgForm) {
    console.log("yyuwu");
  }
}
