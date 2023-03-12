import { Injectable } from '@angular/core';
import {Users} from "./model/users";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, delay, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: Users | undefined;
  private tokenAccess?: string;
  private isLoggedIn?: boolean;
  redirectUrl?: string;

  constructor(private http: HttpClient) {
    this.isLoggedIn = JSON.parse(<string>localStorage.getItem('isLoggedIn'));
    this.tokenAccess = JSON.parse(<string>localStorage.getItem('tokenAccess'));
  }

  // @ts-ignore
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  /*const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
      .set('Authorization', 'Bearer ' + token)
  };*/

  logout(){
    this.isLoggedIn = false;
  }

  public login(email: string, password: string): Observable<any> {

    const identifiant = {
      "email": email,
      "password": password
    }

    return this.http.post('http://127.0.0.1:5000/api/login/', identifiant, this.httpOptions).pipe(
      delay(1000),
      tap((response:any) => { console.log(response.access_token)
        console.log("-----");
        console.log(this.isLoggedIn)
        console.log("-----");
        if(response.access_token){
          this.tokenAccess = response.access_token;
          this.isLoggedIn = true;
          localStorage.setItem('tokenAccess', JSON.stringify(this.tokenAccess));
          localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
        }
        console.log(this.isLoggedIn)
      }),
      catchError((error) => this.handleError(error, null))
    )
  }

  public register(user: Users): Observable<Users> {

    return this.http.post<Users>('http://127.0.0.1:5000/api/register/', user, this.httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  initTokenConnection(token: string) {
    this.tokenAccess = token;
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

}
