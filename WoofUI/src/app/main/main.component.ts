import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private _userService : UsersService) { }

  ngOnInit(): void {
    console.log(this._userService.currentUser.email);
  }

  getData(){
    console.log(this._userService.currentUser.email);
  }
  
  test():boolean{
    if(this._userService.currentUser.email!=undefined){
      return false;
    }
    return true;
  }
}
