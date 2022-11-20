import { logModel } from '../model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { org } from '../orgmodel';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  static submitdetails() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  submitdetails(body: any) {
    let url = 'http://122.170.12.63:90/api/auth/login';
    return this.http.post<logModel>(url, body)

  }

  organizationlist() {
    let token = localStorage.getItem('token');
    let header = new HttpHeaders().set('auth', 'bearer' + token);
    let url = 'http://122.170.12.63:90/api/Organization/getAllOrganization';

    return this.http.get(url, { headers: header });
  }

  addorg(data: any) {
    let token = localStorage.getItem('token');
    let header = new HttpHeaders().set('auth', 'bearer' + token);
    let url = 'http://122.170.12.63:90//api/Organization/addOrganization';

    return this.http.post<org>(url, data, { headers: header });
  }
}
