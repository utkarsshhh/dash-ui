import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictService {
  predict(vals){
    return this.http.post('https://dashboard-housing.herokuapp.com/users/predict',vals) as Observable<object>
  }

  constructor(private http: HttpClient) { }
}
