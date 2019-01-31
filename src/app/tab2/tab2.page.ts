import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
   usuarios
  constructor(public usersProvider: UsersService ){

  }

  ionViewDidLoad(){
     this.usersProvider.getUsers()
     .subscribe(
       (data)=>{ this.usuarios=data["results"]; },
       (error)=>{console.log(error); }
       )  
  } 
}
