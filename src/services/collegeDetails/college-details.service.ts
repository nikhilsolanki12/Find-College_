import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollegeDetailsService {

  constructor(private http:HttpClient) { }
  getDetails():Observable<any>{
    return this.http.get("")
  }
}
