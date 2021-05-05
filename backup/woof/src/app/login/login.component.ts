import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/userModel';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userModel:User=new User();
  constructor(private _userService:UsersService, private _route:Router) { }

  ngOnInit(): void {
    this._userService.getUsers()
    .subscribe(data=> {
      this._userService.userList=data;
      console.log(this._userService.userList);
    });
  }

  submit():void{
    // let navbar = document.getElementById("navBar");
    // navbar?.classList.add("hide-nav");
    let user = this._userService.userList.find(obj=> obj.email == this.userModel.email);
    if(user!=undefined){
      if(user.password==this.userModel.password){
        this._route.navigateByUrl("/homepage");
        this._userService.userLogin(user);
      }
      else{
        alert("invalid password!");
      }
      
    }
    else{
      alert("Please enter valid credentials..");
    }
  }   
}
