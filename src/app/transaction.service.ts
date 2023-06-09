import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService implements OnInit{

public trasctionjsondata:string="./assets/data/transactions.json"

constructor(private http:HttpClient){}

ngOnInit(): void {
  this.getdata()

}
getdata():Observable<any[]>{
  return this.http.get<any[]>(this.trasctionjsondata)
}

}
