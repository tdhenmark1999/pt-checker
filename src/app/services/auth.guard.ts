import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {AuthService} from './auth.service';
import {IUserInfo, IUserInfoModel} from '../models/userInfo.model';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {EnvService} from './env.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private env: EnvService,
    private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> {

    const data: IUserInfo = {
      userId: route.queryParams.UserID,
      name: route.queryParams.Name
    };

    console.log(data);

    return this.authService.getUserInfo(data).pipe(
      map(info => {
        if (info) {
          this.authService.userInfo = info;
          this.authService.nameChanged.next(info.name);
          return true;
        }

        window.location.href = this.env.loginUrl;
        return false;
      }),
      catchError(error => {
        console.log(error);

        window.location.href = this.env.loginUrl;
        return of(false);
      })
    );
  }
}
