import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/userModel';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  _currentUser : User = new User();
  editProfile:boolean = false;
  constructor(private _userService:UsersService) { }

  ngOnInit(): void {
    this._currentUser= this._userService.currentUser;
    console.log(this._currentUser);
  }

  editDetails(){
    this.editProfile=true;
  }

  changePassword(){
    console.log("change");
  }

  updateUser(obj:NgForm){
    this._userService.updateUser(this._currentUser._id,this._currentUser)
      .subscribe(()=>{
        console.log("profile updated successfully...");
        alert("profile updated successfully...");
        this._userService.removeUserFromLocalStorage();
        localStorage.setItem("currentUser",JSON.stringify(this._currentUser));
      },
      (err)=>{
        console.log("Update error : " + err);
        alert("Sorry, update unsuccessful!");
      });
    this.editProfile = false;
  }

}
