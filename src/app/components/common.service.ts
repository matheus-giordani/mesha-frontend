import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './list-register/user.interface';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  baseUrl: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  postDataUser(formData: User) {
    return this.http.post(this.baseUrl, formData);
  }

  getAll(){
    return this.http.get<User[]>(this.baseUrl)
  }

  getUser(id: string){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  update(id:string, data:User){
    return this.http.put(`${this.baseUrl}/${id}`, data)

  }
}
