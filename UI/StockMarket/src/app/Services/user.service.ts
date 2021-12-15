import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { User } from '../Models/user';
import { environment } from 'src/environments/environment';

const Requestheaders={headers:new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': "Bearer "+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  path=environment.path+"/User"
  public Login(email:string,password:string):Observable<any>{
    return this.http.get<User[]>(this.path+"/Login/"+email+"/"+password);
  }

  public Register(user: User):Observable<any> {
    return this.http.post(this.path+`/AddUser`, user);
  }

  public Update(user: User):Observable<any> {
      return this.http.put(`/users/UpdateUser`, user,Requestheaders);
  }

  public Delete(id: number):Observable<any> {
      return this.http.delete(`/users/DeleteUser` + id,Requestheaders);
  }
}
