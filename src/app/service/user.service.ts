import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { UserRegister } from '../model/user-register';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { SigninUser } from '../model/signin-user';
import { Token } from '../model/token';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpCliente : HttpClient) { 
    this.API_URL = environment.apiUrl;

  }

  API_URL : string;

  postRegister(userRegister : UserRegister):Observable<User>{
    return this.httpCliente.post(this.API_URL + "users", userRegister);
  }

  getlistUsers():Observable<Array<User>>{
    return this.httpCliente.get<Array<User>>(this.API_URL + "users");
  }

  postSignin(signin : SigninUser):Observable<Token>{
    return this.httpCliente.post(this.API_URL + "signin", signin);
  }

  getFindById(id : number){
    return this.httpCliente.get<User>(`${this.API_URL}users/${id}`);
  }

  deleteById(id : number){
    return this.httpCliente.delete(`${this.API_URL}users/${id}`);
  }

  putById(id : number, register :UserRegister){
    return this.httpCliente.put(`${this.API_URL}users/${id}`, register );
  }

  getMe(id : number){
    return this.httpCliente.get<User>(this.API_URL + "me");
  }
}

