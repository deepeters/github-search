import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  _URL = 'https://api.github.com/users/';
  token = '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';
  constructor(public  http: HttpClient) {
  }

  getsearchMyUser(searchTerm: string): Observable<any> {
    return this.http.get(this._URL + searchTerm);
  } 

  getRepo(searchTerm: string): Observable<any> {
    return this.http.get(this._URL + searchTerm + '/repos?' + this.token);
  }
  
}
