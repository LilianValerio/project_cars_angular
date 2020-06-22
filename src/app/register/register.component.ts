import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserRegister } from '../model/user-register';
import * as moment from 'moment';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserService, public fb : FormBuilder) { 
    this.form = this.fb.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      birthday : [''],
      login : [''],
      password : [''],
      phone : [''],

    })
  }

  form : FormGroup;


  salvar(){
    const user:UserRegister = {};
    user.birthday=moment(this.form.get('birthday').value).format("yyyy-MM-DD");
    user.firstName=this.form.get('firstName').value;
    user.lastName=this.form.get('lastName').value;
    user.email=this.form.get('email').value;
    user.login=this.form.get('login').value;
    user.password=this.form.get('password').value;
    user.phone=this.form.get('phone').value;
    
    this.service.postRegister(user).subscribe(u=>{
      alert("Usuário registrado.");
    });
  

  }

  ngOnInit(): void {
  }

}
