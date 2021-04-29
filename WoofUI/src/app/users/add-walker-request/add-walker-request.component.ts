import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/userModel';
import { UsersService } from 'src/app/shared/users.service';
import { WalkerRequestService } from 'src/app/shared/walker-request.service';
import { WalkerRequest } from 'src/app/shared/walkerRequestModel';

@Component({
  selector: 'app-add-walker-request',
  templateUrl: './add-walker-request.component.html',
  styleUrls: ['./add-walker-request.component.css']
})
export class AddWalkerRequestComponent implements OnInit {
  _addWalkerRequest: WalkerRequest = new WalkerRequest();
  _currentUser: User = new User();
  _addressLine2: string = "";
  _date: string = ""

  constructor(private _userService: UsersService,
    private _walkerRequestService: WalkerRequestService) { }

  ngOnInit(): void {
    this._currentUser = this._userService.currentUser;
    this._addressLine2 = "";
    this._date= "";
  }

  addWalkerRequest(obj: NgForm) {
    this._addWalkerRequest.user_id = this._currentUser._id;
    this._addWalkerRequest.address = this._currentUser.address + this._addressLine2;
    this._addWalkerRequest.day = Number(this._date.split("-")[2]);
    this._addWalkerRequest.month = Number(this._date.split("-")[1]);
    this._addWalkerRequest.year = Number(this._date.split("-")[0]);
    this._addWalkerRequest.status = "pending";
    this._addWalkerRequest.walker_id="";

    this._walkerRequestService.addWalkerRequest(this._addWalkerRequest)
      .subscribe(()=>{
        console.log("request added successfully..");
        alert("request added successfully...");
        obj.reset();
        this.ngOnInit();
      },
      (err)=>{
        console.log("Add error : " + err);
        alert("Sorry!, Something went wrong");
      });
  }
}
