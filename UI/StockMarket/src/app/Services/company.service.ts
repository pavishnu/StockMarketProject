import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Company } from '../Models/company';

const Requestheaders={headers:new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': "Bearer "+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
editCompany:Company;
  constructor(private http:HttpClient) { }

  path=environment.path;

  public GetAllCompany():Observable<Company[]>{
    return this.http.get<Company[]>(this.path+'/Company/GetAllCompany',Requestheaders)
  }

  public GetCompany(name:string):Observable<any>{
    return this.http.get<any>(this.path+'/Company/GetCompany/'+name,Requestheaders);
  }

  public Register(user: Company):Observable<any> {
    return this.http.post(this.path+`/Company/AddCompany`, user,Requestheaders);
  }

  public Update(user: Company):Observable<any> {
      return this.http.put(this.path+`/Company/UpdateCompany`, user,Requestheaders);
  }

  public Delete(id: number):Observable<any> {
      return this.http.delete(this.path+`/Company/DeleteCompany/` + id,Requestheaders);
  }
}
