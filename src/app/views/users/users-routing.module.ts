import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "../../auth.guard";

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      title: 'Profile Page'
    },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
