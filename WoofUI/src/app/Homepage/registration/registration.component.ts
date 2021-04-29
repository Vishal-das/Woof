import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../shared/userModel';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  confirmPassword:string ="";
  userModel: User = new User();
  constructor(private _userService: UsersService) { }

  ngOnInit(): void {
  }

  addUser(registerationForm:NgForm) {
    document.getElementById("formError")!.innerHTML = "";
    document.getElementById("passwordError")!.innerHTML = "";
    if(this.userModel.name == "" || this.userModel.email == "" || this.userModel.password=="" || this.userModel.phno < 0){
      document.getElementById("formError")!.innerHTML = "please fill all fields with valid inputs";
    }
    else if(this.userModel.password != this.confirmPassword){
      document.getElementById("passwordError")!.innerHTML = "Passwords don't match!";
    }
    else{
    this._userService.addUser(this.userModel)
      .subscribe(() => {
        console.log("data added successfully...");
        window.alert("data added successfully");
        this.userModel.name = "";
        this.userModel.email = "";
        this.userModel.password = "";
        this.userModel.address = "";
        this.userModel.phno = 0;
      },
        (err) => { console.log(err); }
      );
      registerationForm.reset();
    }
  }

}
