import { Component, OnInit } from '@angular/core';
import { WalkerRequestService } from '../shared/walker-request.service';
import { WalkerRequest } from '../shared/walkerRequestModel';

@Component({
  selector: 'app-walker-requests',
  templateUrl: './walker-requests.component.html',
  styleUrls: ['./walker-requests.component.css']
})
export class WalkerRequestsComponent implements OnInit {
  walkerRequestList : Array<WalkerRequest> = [];
  constructor(private _walkerRequestService : WalkerRequestService) { }

  ngOnInit(): void {
    this.getWalkerRequestList();
  }

  getWalkerRequestList(){
    this._walkerRequestService.getWalkerRequests().subscribe((data)=>{
      this.walkerRequestList = data;
      console.log(this.walkerRequestList);
    });
  }

  removeRequest(obj:WalkerRequest){
    this._walkerRequestService.removeWalkerRequest(obj._id)
      .subscribe(()=>{
        alert("request removed successfully...");
        this.getWalkerRequestList();
      },
      (err)=>{
        alert("Sorry, remove unsuccessful!");
        console.log("Delete Error : " + err);
      });
  }

  editRequest(obj:WalkerRequest){
    console.log("edit");
  }
}
