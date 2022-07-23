import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:5000/data"
  constructor(private http: HttpClient) {
  }
  getAllUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  /*getProduct(id: number): Observable<User> {
    return this.http.get<User>(this.url+'/'+id);
  }*/
}
