import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData : Employee;
  list : Employee[];
  readonly rootURL = "http://localhost:9090/webapi/v1"

  constructor(private http : HttpClient) { }
  
  postEmployee(formData : Employee){
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post(this.rootURL+'/user',formData, options);
  }

  refreshList() {
    this.http.get(this.rootURL+'/user')
    .toPromise().then(response => this.list = response as Employee[]);
  }

  putEmployee(formData : Employee){
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.put(this.rootURL+'/user'+ formData.id,formData, options);
  }

  deleteEmployee(id : number){
    return this.http.delete(this.rootURL+'/user'+ id);
  }
}
