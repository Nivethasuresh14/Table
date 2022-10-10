import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeekserviceService {

  constructor(private http: HttpClient) { }

  baseurl : string = './assets/weeks.json';

  getweeks()
  {
    return ['january','february','march','april','may','juna','july'];
  } 

  getweekbyapi()
  {
    return this.http.get<any>(this.baseurl)
    .toPromise()
    .then(data => { console.log(data);return data; });

    

  }



}
