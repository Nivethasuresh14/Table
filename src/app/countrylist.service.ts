import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountrylistService {

  constructor(private http: HttpClient) { }
  baseUrl: string  = 'https://ipamglobalsoftware.com/apiangular/';

  getcountries(){
    return this.http.get<any>(this.baseUrl + 'countries.php')
   .toPromise()
   .then(data => { return data; });

  }
}
