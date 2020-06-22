import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cars } from '../model/cars';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpCliente : HttpClient) { 

  }

  API_URL : string = "api/"

  postRegister(car : Cars):Observable<Cars>{
    return this.httpCliente.post(this.API_URL + "cars", car);
  }

  getlistCars():Observable<Array<Cars>>{
    return this.httpCliente.get<Array<Cars>>(this.API_URL + "cars");
  }

  getFindById(id : number){
    return this.httpCliente.get<Cars>(`${this.API_URL}cars/${id}`);
  }

  deleteById(id : number){
    return this.httpCliente.delete(`${this.API_URL}cars/${id}`);
  }

  putById(id : number, car :Cars){
    return this.httpCliente.put(`${this.API_URL}cars/${id}`, car);
  }

}
