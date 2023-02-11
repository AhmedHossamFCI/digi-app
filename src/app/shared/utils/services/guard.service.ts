import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "./auth.service";



@Injectable()
export class GuardService implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthenticationService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.validateOrRedirect(state.url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.hasAccess(state.url);
  }
  canLoad(route: Route): Observable<boolean> | boolean {
    return this.authService.validateOrRedirect(`/${route.path}`);
  }

}



@Injectable()
export class LoginGuardService implements CanActivateChild {

  constructor(private authService: AuthenticationService) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.canLoginOrRedirect();
  }

}
