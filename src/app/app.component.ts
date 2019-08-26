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
  useLogin = "";
  useMail = "";
  
  constructor ( private check : CheckService ) { }

  onSubmit(form : NgForm){
    let email = form.value['email'];
    let login = form.value['login'];  
    this.check.getUsers(email).subscribe((data)=>{
     
      this.results = data;

      this.results.find((result)=>{
        if(result.email === email){
          this.useMail= "Ce mail est déja utilisé"
        }
      })})
      this.check.getUsers(login).subscribe((data)=>{
     
        this.results = data;
  
        this.results.find((result)=>{
          if(result.login === login){
            this.useLogin= " Ce login est déjà utilisé ";
          }
        })
      })
  }
}
