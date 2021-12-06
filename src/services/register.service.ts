import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  register(myForm){
    return this.http.post("https://dashboard-housing.herokuapp.com/users/register",myForm) as Observable<object>

  }
  constructor(private http: HttpClient) { }
}
