import { Component, OnInit, OnChanges } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { FormBuilder, FormControl,Validators, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/services/register.service';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loginservice:LoginService,private fb:FormBuilder,private registerservice: RegisterService,private http:HttpClient, private router: Router) { }
  invalidButton = true;
  existUsers;
  regForm:object;
  userExist = false;
  invalidPass = false;
  myForm : FormGroup
  maxId: Number = 0;
  errorMessage;
  ngOnInit(): void {
    this.myForm = this.fb.group(
      {
        username: ['',[Validators.required,Validators.pattern(/^[A-z]+[_]*[A-z]*$/)]],
        password: ['',[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
        password2: ['',[Validators.required]],
        age:['',[Validators.required,Validators.min(13)]]
      }
    )
      this.loginservice.login().subscribe((res) =>{
        this.existUsers = res['users']
      })

  }
  buttonVal() {
    if(this.myForm.valid){
      this.invalidButton = false
    }
    else{
      this.invalidButton = true
    }

  }
  userRegister(){
    this.maxId = 0
    this.userExist=false;
    if (this.myForm.value.password!=this.myForm.value.password2){
      this.invalidPass = true
    }
    else{
      this.invalidPass = false
      for (const ch of this.existUsers){
        if(ch.username==this.myForm.value.username){
          this.userExist = true
        }
        if(Number(ch.id)>Number(this.maxId)){
          this.maxId = Number(ch.id)
        }

      }
      this.regForm = {
        id:String(Number(this.maxId)+Number(1)),
        age:this.myForm.value.age,
        password:this.myForm.value.password,
        username:this.myForm.value.username
      }
      if(this.userExist==false){
        
        this.registerservice.register(this.regForm).subscribe((res) => {
          sessionStorage.setItem("isLogged","Yes")
          sessionStorage.setItem('user',this.regForm['username'])
          this.router.navigate(['/home/'+this.regForm['username']])
        },
        (err) => {})
      }
      
    }
  }

}

