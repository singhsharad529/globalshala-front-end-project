import { Injectable } from '@angular/core';
import { HttpHeaders,HttpParams,HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TableApiService {

  constructor(private httpClient:HttpClient) { }

  getTableApi(){
    return this.httpClient.get("https://reqres.in/api/users/");
  }

}
