import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login(){
    return this.http.get('https://dashboard-housing.herokuapp.com/users') as Observable<object>
  }
  register(myForm){
    return this.http.post('https://dashboard-housing.herokuapp.com/users/register',myForm) as Observable<object>

  }

  constructor(private http: HttpClient) { }
}
