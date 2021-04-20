import { Component, OnInit } from '@angular/core';
import { User } from '../shared/userModel';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userModel:User=new User();
  constructor(private _userService : UsersService) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.userModel);
  }

  addUser(){
    this._userService.addUser(this.userModel)
      .subscribe(()=>{
        console.log("data added successfully...");
        window.alert("data added successfully");
      },
        (err)=>{console.log(err);}
        );
  }

}
