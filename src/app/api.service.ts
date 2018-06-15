import { Injectable } from  '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
providedIn:  'root'
})

export  class  APIService {
  api_ssn='';
  API_URL  =  'http://10.102.8.101:3000/customer';
  constructor(private  httpClient:  HttpClient) {}
  getContacts(){
      return  this.httpClient.get(`${this.API_URL}`);
  }
}