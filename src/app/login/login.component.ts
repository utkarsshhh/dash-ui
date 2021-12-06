import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,private router: Router) { }
  users_obs;
  users;
  username;
  password;
  invalidMessage = "";
  notLogged = false;
  Login(){
    for (const ch of this.users){
      if(ch.username==this.username && ch.password==this.password){
        sessionStorage.setItem("isLogged","Yes")
        sessionStorage.setItem("user",this.username)
        sessionStorage.setItem("pass",this.password)
        this.notLogged = false;
      }
      else{
        this.invalidMessage= "Invalid username or password";
        this.notLogged = true;

      }
    }
    console.log(sessionStorage.getItem("isLogged"))
    if(sessionStorage.getItem("isLogged")=="Yes"){
      sessionStorage.setItem('user',this.username)
      this.router.navigate(['/home/'+ this.username])
    }

  }

  ngOnInit(): void {
    this.loginService.login().subscribe((res) => {
      this.users = res['users'];
    }

    )
    sessionStorage.clear()
  }
}
