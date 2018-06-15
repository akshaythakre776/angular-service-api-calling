import { Component, OnInit } from  '@angular/core';
import { APIService } from  './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'World';

private  contacts:  Array<object> = [];
constructor(private  apiService:  APIService) { }
ngOnInit() {
    this.getContacts();
}
public  getContacts(){
    this.apiService.getContacts().subscribe((data:  Array<object>) => {
        this.contacts  =  data;
        console.log(data);
    });
}
}