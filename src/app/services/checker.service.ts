import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observable, Observable} from 'rxjs';
import {Checker} from '../models/checker.model';
import {map, switchMap} from 'rxjs/operators';
import {HttpUrlEncodingCodec} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthService} from './auth.service';
import {EnvService} from './env.service';


@Injectable({
  providedIn: 'root'
})
export class CheckerService {

  private baseUrl = environment.apiUrl;
  private clientId = environment.clientId;
  private clientSecret = environment.secret;


  codec = new HttpUrlEncodingCodec;

  constructor(private http: HttpClient, private authService: AuthService, private env: EnvService) {
    this.baseUrl = this.env.apiUrl;
  }

  findPawnTicket(id: any): Observable<any> {


    return this.authService.authLogin().pipe(
      switchMap(res => {
        const authHeaders = this.authService.getAuthHeaders(res.accessToken);
        console.log(authHeaders);
        return this.http.get<Checker>(`${this.baseUrl}/PawnTicket/${encodeURIComponent(id)}`, {observe: 'response', headers: authHeaders});
      })
    );

  }

}

export class Auth {
  clientId: string;
  clientSecret: string;
}
