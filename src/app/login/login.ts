import { Component, inject } from '@angular/core';
import { Authservice } from '../authservice';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authservice=inject(Authservice);
  
    user:string='admin'
    password:number=123
  ngOnInit(){
  if (this.user === 'admin' && this.password === 123) {
    this.authservice.islogged.set(true);
  }
  }

}
