import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: String;
  password: String;

  constructor(private registerService: RegisterService,
              private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    console.log('Email: '+ this.email);
    console.log('Password: '+ this.password);

    const user = {
      email: this.email,
      password: this.password
    };

    this.registerService.authenticateUser(user).subscribe(data => {
      console.log(data);
    });
  }

}
