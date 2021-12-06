import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  canNavigate(){
    if (sessionStorage.getItem("isLogged")=="Yes"){
      return true;

    }
  }

  constructor() { }
}
