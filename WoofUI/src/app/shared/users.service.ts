import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import { Observable,of,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators'
import { User } from './userModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  static REST_API:string="http://localhost:8080/API/users";
  userList:Array<User>=[];
  currentUser:User= new User();

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    let GET_USER_URL:string=UsersService.REST_API + "/list";   
    return this.http.get<User[]>(GET_USER_URL);
  }

  addUser(data:User):Observable<any>{
    let POST_USER_URL:string = UsersService.REST_API + "/";
    return this.http.post(POST_USER_URL,data)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error : HttpErrorResponse){
    console.log(error);
    return throwError(new Error(error.message || "Server error"));
  }
  
  userLogin(_currentUser:User):void{
    this.currentUser = _currentUser;
    console.log(_currentUser);
  }

  checkUser():Observable<User>{
    return of(this.currentUser);
  }
  
}
