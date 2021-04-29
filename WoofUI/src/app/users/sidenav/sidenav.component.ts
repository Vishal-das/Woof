import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private _userService:UsersService) { }

  ngOnInit(): void {
  } 

  logoutUser(){
    this._userService.removeUserFromLocalStorage();
    location.reload();
  }
}
