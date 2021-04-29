import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Dog } from './dogModel';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  static REST_API: string = "http://localhost:8080/API/dogs";
  dogList: Array<Dog> = [];
  currentDog: Dog = new Dog();

  constructor(private http: HttpClient) { }

  getDogs(): Observable<Dog[]> {
    let GET_DOG_URL: string = DogsService.REST_API + "/list";
    return this.http.get<Dog[]>(GET_DOG_URL);
  }

  test(obj:Dog){
    console.log(obj);
  }

  addDog(obj : Dog):Observable<any>{
    let POST_DOG_URL : string = DogsService.REST_API + "/";
    return this.http.post(POST_DOG_URL,obj)
      .pipe(catchError(this.errorHandler));
  }

  updateDog(_id:string,data:Dog){
    let UPDATE_DOG_URl : string = `${DogsService.REST_API}/` + _id;
    return this.http.put(UPDATE_DOG_URl,data);
  }

  deleteDog(_id:any):Observable<any>{
    let DELETE_DOG_URL = `${DogsService.REST_API}/` + _id;
    return this.http.delete(DELETE_DOG_URL,_id);
  }

  errorHandler(error : HttpErrorResponse){
    console.log(error);
    return throwError(new Error(error.message || "Server error"));
  }
}
