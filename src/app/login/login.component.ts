import { HttpService } from '../Services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    organizationUrl: new FormControl('', Validators.required),
  });
  error: any;

  constructor(private HttpService: HttpService, private route: Router) {}

  ngOnInit(): void {}

  submitform() {
    this.HttpService.submitdetails(this.login.value).subscribe((el: any) => {
      let token = el.auth_token;
      localStorage.setItem('token', JSON.stringify(token));

      if (el.success) {
        this.route.navigate(['/org']);
        console.log(el);
      }

      this.error = el.message;
    });
  }
}
