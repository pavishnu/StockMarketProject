import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Exchange } from '../Models/exchange';

const Requestheaders={headers:new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': "Bearer "+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  editExchange:Exchange;
  constructor(private http:HttpClient) { }

  path=environment.path;

  public GetAllExchange():Observable<Exchange[]>{
    return this.http.get<Exchange[]>(this.path+'/StockExchange/GetAllStockExchange',Requestheaders)
  }

  public GetExchange(name:string):Observable<any>{
    return this.http.get<any>(this.path+'/StockExchange/GetStockExchange/'+name,Requestheaders);
  }

  public Register(user: Exchange):Observable<any> {
    return this.http.post(this.path+`/StockExchange/AddStockExchange`, user,Requestheaders);
  }

  public Update(user: Exchange):Observable<any> {
      return this.http.put(this.path+`/StockExchange/UpdateStockExchange`, user,Requestheaders);
  }

  public Delete(id: number):Observable<any> {
      return this.http.delete(this.path+`/StockExchange/DeleteStockExchange/` + id,Requestheaders);
  }
}
