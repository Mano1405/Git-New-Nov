import { HttpService } from '../../Services/http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.scss'],
})
export class OrgComponent implements OnInit {

  showtable: any;
  constructor(private HttpService: HttpService, private route: Router) {}

  ngOnInit(): void {
    this.HttpService.organizationlist().subscribe((res: any) => {
      console.log(res);
      this.showtable = res.data;
    });
  }
  nevigate() {
    this.route.navigate(['/addorg']);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.clear();

    this.route.navigate(['']);
  }
}
