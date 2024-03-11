import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService  {

  constructor(private readonly http: HttpClient) { }

  onLogin(){ throw  new Error('Method not implemented.');}
}
