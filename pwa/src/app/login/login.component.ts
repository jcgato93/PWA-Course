import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "login";
  userData:any={};

  constructor(private authFBService:AuthorizationService) { }

  ngOnInit() {
  }


  login(){
    this.authFBService.login(this.userData.email,this.userData.password);    
  }

  register(){
    this.authFBService.register(this.userData.email,this.userData.password);    
  }
}
