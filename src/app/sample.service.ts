import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SampleService {
  constructor(private http: HttpClient) {}

  public getItems(): Observable<any> {
    console.log('getItems');
    return this.http
      .get(`https://qiita.com/api/v2/items`)
      .pipe(tap((data) => data));
  }
}
