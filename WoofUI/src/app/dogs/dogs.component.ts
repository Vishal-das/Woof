import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Dog } from '../shared/dogModel';
import { DogsService } from '../shared/dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  testVar:Date = new Date();
  _currentYear:number = this.testVar.getFullYear();
  dob:Date= new Date();

  _dogList:Array<Dog>=[];
  _newDog:Dog=new Dog();
  
  constructor(private _dogService:DogsService) { }
  
  ngOnInit(): void {
    this._newDog.gender="Male";    
    this._dogService.getDogs().subscribe((data)=>{
      this._dogList = data;
      this._dogService.dogList = data;
      // console.log(this._dogList);
      // console.log(this._dogService.dogList);
    })
  }

  removeDog(obj:Dog){
    this._dogService.deleteDog(obj._id)
      .subscribe(()=>{
        alert("Dog removed..");
        this.ngOnInit();
      },
      (err)=>{
        console.log("Delete Error : " + err);
      });
  }

  editDog(obj:Dog){
    console.log(obj);
  }

  saveDog(dogForm:NgForm){
    
    this._newDog.user_id = "6085bd5f4705032728e7993e";
    this._newDog.day = this.dob.getDate();
    this._newDog.month = this.dob.getMonth();
    this._newDog.year = this.dob.getFullYear();

    this._dogService.addDog(this._newDog)
      .subscribe(()=>{console.log("data added successfully..")},
      (err)=>{console.log(err)});
    
    alert("Dog details added...");
    dogForm.reset();
  }

  test(){
    console.log(this.testVar)
    console.log(this.testVar.getDate() + " "
    + (Number(this.testVar.getMonth()) + 1) + " "
    + this.testVar.getFullYear());
  }
}
