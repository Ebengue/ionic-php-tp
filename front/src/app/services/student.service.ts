import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Student {
  id: string;
  name: string;
  address: string;
  phone: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = "http://localhost/Ionic%205%20with%20PHP%20and%20MySQL/crud_api/api/app.php";
  constructor(private http: HttpClient) {

  }

  get( id : string){
    return this.http.get<[Student]>(this.url + '?id=' + id);
  }

  getAll(){
    return this.http.get<[Student]>(this.url);
  }

  create(student : Student){
    return this.http.post(this.url,student,{responseType: 'json'});
  }

  update(student : Student, id: string){
    return this.http.put(this.url + '?id=' + id,student);
  }

  remove(id: string){
    return this.http.delete(this.url + '?id=' +id);
  }

}