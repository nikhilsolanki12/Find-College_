import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(
    private http: HttpClient,
  ) { }

  public getEducation(data: any) {
    return this.http.get('/education', { params: data});
  }
  public getUserEducation(data: any) {
    return this.http.get('/user-education', { params: data});
  }
  public insertUserEducation(data: any) {
    return this.http.post('/user-education', data);
  }
  public updateUserEducation(data: any) {
    return this.http.put('/user-education/'+data._id, data);
  }
  public deleteUserEducation(data: any) {
    return this.http.delete('/user-education/'+data._id);
  }
}