import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CheckService} from './service/check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  results : any;
  title = 'Login';
  useLogin : String;
  useMail : String;
  colorMail : String;
  colorLogin : String

  constructor (private check : CheckService ) { }
  //méthode pour effacer le message d'erreur
  eraseInputMail() {
    this.useMail="";
    this.colorMail = "ng-valid";
  }
  
  eraseInputLogin() {
    this.useLogin= "";
    this.colorLogin = "ng-valid";
  }
  //Méthode au changement d'input
  onBlurMethod(name,value)
  {
    if(name === "login"){
    let login = value; 
    this.check.getUsers().subscribe((data)=>{
      this.results = data;
      this.results.find((result)=>{
        if (result.login === login){
          this.useLogin= " Ce login est déjà utilisé ";
          this.colorLogin = "ng-invalid";
        }
      })
    })
  }
  if(name === "email"){
    let email = value;
    this.check.getUsers().subscribe((data)=> {
      this.results = data;
      this.results.find((result)=> {
        if (result.email === email) {
          this.useMail= "Ce mail est déja utilisé"
          this.colorMail = "ng-invalid";
        }
      })})
    }
  }
}
  //Méthode avec Submit


  /* onSubmit(form : NgForm) {
    let email = form.value['email'];
    let login = form.value['login'];  
    
    this.check.getUsers().subscribe((data)=> {
      this.results = data;
      this.results.find((result)=> {
        if (result.email === email) {
          this.useMail= "Ce mail est déja utilisé"
          this.colorMail = "ng-invalid";
        }
      })})

      this.check.getUsers().subscribe((data)=>{
        this.results = data;
        this.results.find((result)=>{
          if (result.login === login){
            this.useLogin= " Ce login est déjà utilisé ";
            this.colorLogin = "ng-invalid";
          }
        })
      })
  } */

