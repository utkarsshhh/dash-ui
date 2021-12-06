import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dashboard';
  logged;
  user;
  constructor(private router: Router){}
  logout(){
    sessionStorage.clear()
    this.logged = null;
  }

  ngOnChanges(){
    this.logged = sessionStorage.getItem("isLogged") 
    this.user = sessionStorage.getItem('user')
  }
  ngDoCheck(){
    this.logged = sessionStorage.getItem("isLogged")
    this.user = sessionStorage.getItem('user')
  }
  ngOnInit(){
    this.user = ''
  }
}
