import { HttpService } from '../../Services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  error: any;
  constructor(private httpservice: HttpService) {}

  org = new FormGroup({
    orgname: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    shortname: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    url: new FormControl('', [Validators.required, Validators.pattern("/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/")]),
    logo: new FormControl('', [Validators.required, Validators.maxLength(200),Validators.pattern('[a-zA-Z ]*')]),
  });

  ngOnInit(): void {}
  submitform() {
    this.httpservice.addorg(this.org.value).subscribe((res: any) => {
      console.log(res);
      this.error = res.message;
    });
  }
}
