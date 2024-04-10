import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DbAccess } from './db-access.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'compitoGarofalo'
  usr:string = ""
  psw:string = ""
  name:string = ""
  data: any
  loginSuccess:boolean = false
  loginError:boolean = false

  
  constructor(private dbAccess : DbAccess) {}


  login(bodyP:any, useBodyParam:boolean){

    let body:any

    if(!useBodyParam){
      body = '{"username": "'+this.usr+'", "password": "'+this.psw+'"}'
      JSON.stringify(body)
    }else{
      body = bodyP
    }
    this.dbAccess.post(body, "login").subscribe(remoteData => {this.data = remoteData
      if(this.data.valid){
        this.loginSuccess = true
        this.loginError = false
      }else
        this.loginError = true
    })
    

  }

  register(){

    let body = '{"username": "'+this.usr+'", "password": "'+this.psw+'"}'
    JSON.stringify(body)
    this.dbAccess.post(body, "register").subscribe(remoteData => {this.data = remoteData})
    this.login(body, true)
  }

  logout(){

    this.loginSuccess = false;
  }
}
