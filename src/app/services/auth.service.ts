import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Auth} from './checker.service';
import {environment} from '../../environments/environment';
import {Checker} from '../models/checker.model';
import {IUserInfo, IUserInfoModel} from '../models/userInfo.model';
import {switchMap} from 'rxjs/operators';
import {EnvService} from './env.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl;
  private clientId = environment.clientId;
  private clientSecret = environment.secret;
  public userInfo: IUserInfo = null;
  public nameChanged = new Subject<string>();

  constructor(private http: HttpClient, private route: ActivatedRoute, private env: EnvService) {
    this.baseUrl = this.env.apiUrl;
  }

  getAuthHeaders(token) {
    const reHeader = new HttpHeaders({
      'Content-type': 'application/json; charset=utf8',
      Authorization: `Bearer ${token}`,
    });

    return reHeader;
  }

  authLogin(): Observable<any> {
    const formData = new FormData();
    console.log(this.env);
    formData.append('clientId', environment.clientId);
    formData.append('clientSecret', environment.secret);
    return this.http.post<Auth>(`${this.baseUrl}/auth/client`, formData);
  }

  getUserInfo(data: IUserInfo): Observable<IUserInfo> {
    const json = JSON.stringify(data);
    console.log(json);
    return this.authLogin().pipe(
      switchMap(res => {
        const authHeaders = this.getAuthHeaders(res.accessToken);
        return this.http.post<IUserInfo>(`${this.baseUrl}/auth/user/info`, json, {headers: authHeaders});
      })
    );
  }
}

