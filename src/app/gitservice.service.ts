import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitserviceService {

  constructor( private http: HttpClient) { }

 getData(repoName): Observable <any> {
 return this.http.get('https://api.github.com/search/repositories?q=' + repoName + '+language:assembly&sort=stars&order=desc');
}
}
