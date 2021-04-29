import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WalkerRequest } from './walkerRequestModel';

@Injectable({
  providedIn: 'root'
})
export class WalkerRequestService {
  static REST_API: string = "http://localhost:8080/API/requests";
  
  constructor(private http:HttpClient) { }

  getWalkerRequests():Observable<WalkerRequest[]>{
    let GET_WALKER_REQUEST_URL : string = WalkerRequestService.REST_API + '/list';

    return this.http.get<WalkerRequest[]>(GET_WALKER_REQUEST_URL);
  }

  addWalkerRequest(data:WalkerRequest):Observable<any>{
    let POST_WALKER_REQUEST_URL : string = WalkerRequestService.REST_API + '/';
    return this.http.post(POST_WALKER_REQUEST_URL,data)
      .pipe(catchError(this.errorHandler));
  }

  removeWalkerRequest(_id:any):Observable<any>{
    let DELETE_WALKER_REQUEST_URL :string = `${WalkerRequestService.REST_API}/` +_id;
    return this.http.delete(DELETE_WALKER_REQUEST_URL,_id);

  }

  errorHandler(error : HttpErrorResponse){
    console.log(error);
    return throwError(new Error(error.message || "Server error"));
  }
}
