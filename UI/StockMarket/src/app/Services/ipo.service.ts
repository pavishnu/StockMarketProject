import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Ipo } from '../Models/ipo';

const Requestheaders={headers:new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': "Bearer "+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class IpoService {
  editIpo:Ipo;
  constructor(private http:HttpClient) { }

  path=environment.path;

  public GetAllIpo():Observable<Ipo[]>{
    return this.http.get<Ipo[]>(this.path+'/Ipo/GetAllIpo',Requestheaders);
  }

  public GetIpo(name:string):Observable<any>{
    return this.http.get<any>(this.path+'/Ipo/GetIpo/'+name,Requestheaders);
  }

  public Register(user: Ipo):Observable<any> {
    return this.http.post(this.path+`/Ipo/AddIpo`, user,Requestheaders);
  }

  public Update(user: Ipo):Observable<any> {
      return this.http.put(this.path+`/Ipo/UpdateIpo`, user,Requestheaders);
  }

  public Delete(id: number):Observable<any> {
      return this.http.delete(this.path+`/Ipo/DeleteIpo/` + id,Requestheaders);
  }
}

