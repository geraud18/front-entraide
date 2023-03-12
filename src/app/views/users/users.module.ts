import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {UsersRoutingModule} from "./users-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
