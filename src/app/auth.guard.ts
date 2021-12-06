import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeService } from 'src/services/home.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private service: HomeService){}
  canActivate(route: ActivatedRouteSnapshot ): boolean {
    if(this.service.canNavigate() && route.params.user == sessionStorage.getItem('user')){
      return true;
    }
    else{
      this.router.navigate(['/login'])
    }
    
  }
  
}
