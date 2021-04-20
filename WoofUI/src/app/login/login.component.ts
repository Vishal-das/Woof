import { Component, OnInit } from '@angular/core';
import { User } from '../shared/userModel';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userList:Array<User>=[];
  userModel:User=new User();
  constructor(private _userService:UsersService) { }

  ngOnInit(): void {
    this._userService.getUsers()
    .subscribe(data=> {
      this.userList=data;
      console.log(this.userList);
    });
  }

  submit():void{
    // let navbar = document.getElementById("navBar");
    // navbar?.classList.add("hide-nav");
    console.log(this.userModel);
  }
}
