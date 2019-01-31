import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(public http: HttpClient) {

   }
   getUsers(){
     return this.http.get('https://randomuser.me/api/?results=25'); 

   }
}
