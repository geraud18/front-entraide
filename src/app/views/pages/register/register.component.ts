import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Users} from "../../../model/users";
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: Users | undefined;
  showPassword: boolean = false;
  verifPass: boolean = false;

  // private authService: AuthService
  constructor() {
  }

  verifPassword(password:string, confirmPassword:string) {
    if(password != confirmPassword){
      this.verifPass = true;
    }else{
      this.verifPass = false;
    }
  }

  onSubmit(form: NgForm){
    this.user = new Users(
      form.value.name,
      form.value.firstname,
      form.value.email,
      form.value.password,
      "",
      form.value.telephone,
      "",
      new Date()
    )

  /*  this.authService.register(this.user).subscribe(
      (value:Users) => console.log(value)
    );*/
  }

}
