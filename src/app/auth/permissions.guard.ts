import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})

export class PermissionsGuard implements CanActivateChild {
  constructor(private auth: AuthService, private router: Router) {
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Checking permissions')
    return this.auth.hasPermissions()
  }
}
