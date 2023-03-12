import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showPassword: boolean = false;
  // private authService: AuthService
  constructor(
              private router: Router) {
  }

  onSubmit(form: NgForm) {
    /*this.authService.login(form.value.email, form.value.password).subscribe(
      (value:any) => {
        console.log(value);
        this.router.navigate(['/dashboard'])
      }
    );*/
    console.log("yyuwu");
  }
}
