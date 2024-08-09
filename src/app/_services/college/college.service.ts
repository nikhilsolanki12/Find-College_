import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apis } from 'src/app/apis/apis';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  constructor(private http:HttpClient) { }

  getDetails():Observable<any>
  {
    let url = apis.college;
    return this.http.get(url);

  }

  subDetails(id:any):Observable<any>
  {
    let url = apis.college + "/" + id;
    return this.http.get(url);

  }


}
