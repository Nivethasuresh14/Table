import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {

    constructor(private http: HttpClient) { }
    baseUrl: string  = 'https://ipamglobalsoftware.com/apiangular/';

    getCountries() {
    return this.http.get<any>(this.baseUrl + 'countries.php')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
    }
}