import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CovidTrackingService {

  constructor(private http:HttpClient) { }
  getTotaltested() {
    return this.http.get('https://api.covid19india.org/state_test_data.json');
}
getTotalRecovered(){
  return this.http.get('https://api.covid19india.org/states_daily.json');
}
}
