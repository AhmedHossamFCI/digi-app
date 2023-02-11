import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "@app/env";
import { catchError, Observable, of } from "rxjs";
import { UserTypes } from "../enums";
import { UserModel } from "../models";
import { HttpErrorHandler } from "./http-error-handler.service";

@Injectable()
export class AuthenticationService {
  private url: string = `${environment.apiUrl}/oauth/token`;

  constructor(private http: HttpClient, private eh: HttpErrorHandler, private router: Router) { }



  get CurrentUser() {
    let user: UserModel = null;
    let localStorageUser = localStorage.getItem('current-user');
    if (localStorageUser)
      user = JSON.parse(localStorageUser);

    if (!user || user.claims.length == 0)
      return null;

    return user;
  }


  login(username: string, password: string): Observable<boolean> {
    if (username == 'admin' && password == 'admin') {
      let adminUser = {
        username: 'admin',
        fullname: 'admin',
        claims: [UserTypes.Admin]
      } as UserModel
      localStorage.setItem('current-user', JSON.stringify(adminUser));
      return of(true)
    } else if (username == 'user' && password == 'user') {
      let normalUser = {
        username: 'user',
        fullname: 'user',
        claims: [UserTypes.User]
      } as UserModel
      localStorage.setItem('current-user', JSON.stringify(normalUser));
      return of(true)
    }
    return of(false);
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  canLoginOrRedirect(): Observable<boolean> {
    if (this.CurrentUser) {
      window.location.href = window.location.origin;
      return of(false);
    }
    else {
      return of(true);
    }
  }


  validateOrRedirect(returnUrl?: string): Observable<boolean> {
    returnUrl = window.location.pathname;
    if (this.CurrentUser)
      return of(true);
    else {
      this.router.navigateByUrl('/login');
      return of(false);
    }
  }

  hasAccess(url: string): Observable<boolean> {
    let user = this.CurrentUser
    if (!user) {
      this.router.navigateByUrl('/login');
      return of(false);
    }
    else {
      if (this.hasClaim(UserTypes.Admin) && url == '/products/product-list')
        return of(true);
      else if (this.hasClaim(UserTypes.User) && url == '/products/product-list') {
        this.router.navigateByUrl('/');
        return of(false)
      }

      return of(true);
    }
  }

  hasClaim(id: number) {
    return this.CurrentUser.claims.includes(id);
  }

}
