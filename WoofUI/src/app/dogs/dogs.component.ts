import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Dog } from '../shared/dogModel';
import { DogsService } from '../shared/dogs.service';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  testVar:Date = new Date();
  _currentYear:number = this.testVar.getFullYear();
  _dob:string="";
  showForm:boolean=false;
  showeditForm:boolean=false;

  _dogList:Array<Dog>=[];
  _newDog:Dog=new Dog();
  
  constructor(private _dogService:DogsService, private _userService: UsersService) { }
  
  ngOnInit(): void {
    this.getDogs();
    
  }

  getDogs(){
    this._dogList=[];
    this._dogService.getDogs().subscribe((data)=>{
      for(let dog of data){
        if(dog.user_id == this._userService.currentUser._id){
            this._dogList.push(dog);
        }
      }
      //this._dogService.dogList = data;
    })
    this._newDog.gender="male";    
    this._newDog.name ="";
    this._dob="";
    this._newDog.user_id=this._userService.currentUser._id;
  }


  removeDog(obj:Dog){
    this._dogService.deleteDog(obj._id)
      .subscribe(()=>{
        alert("Dog removed successfully..");
        this.getDogs();
      },
      (err)=>{
        alert("Sorry, remove unsuccessful!");
        console.log("Delete Error : " + err);
      });
  }

  editDog(obj:Dog){
    this._newDog = obj;
    if(obj.day<10 && obj.month < 10){
      this._dob = obj.year + "-0"+ obj.month + "-0" + obj.day;
    }
    else if(obj.day<10){
      this._dob = obj.year + "-"+ obj.month + "-0" + obj.day;
    }
    else if(obj.month<10){
      this._dob = obj.year + "-0"+ obj.month + "-" + obj.day;
    }
    else{
      this._dob = obj.year + "-"+ obj.month + "-" + obj.day;
    }
    this.showeditForm=true;
  }

  updateDog(editDogForm:NgForm){
    this._dogService.updateDog(this._newDog._id,this._newDog)
    this._newDog.day = Number(this._dob.split("-")[2]);
    this._newDog.month = Number(this._dob.split("-")[1]);
    this._newDog.year = Number(this._dob.split("-")[0]);
    this._dogService.updateDog(this._newDog._id,this._newDog)
      .subscribe(()=>{
        alert("Update successful...");        
        editDogForm.reset();
        this.getDogs();
        this.showeditForm=false;
      },
      (err)=>{
        alert("Sorry,Update unsuccessful!")
        console.log("Update Error : " + err);
      });
  }

  saveDog(dogForm:NgForm){
    //this._newDog.user_id = "6085bd5f4705032728e7993e";
    this._newDog.day = Number(this._dob.split("-")[2]);
    this._newDog.month = Number(this._dob.split("-")[1]);
    this._newDog.year = Number(this._dob.split("-")[0]);
    
    this._dogService.addDog(this._newDog)
      .subscribe(()=>{
        console.log("data added successfully..");
        alert("Dog details added successfully...");
        dogForm.reset();
        this.getDogs();
        this.showForm=false;
      },
      (err)=>{
        console.log("Add error : " + err);
        alert("Sorry!, Something went wrong");
      });
  }

  showAddForm(){
    this.showForm=true;
  }

  cancelEdit(){
    this.getDogs();
    this.showeditForm=false;
  }

  cancelAdd(){
    this.getDogs();
    this.showForm=false;
  }
}
