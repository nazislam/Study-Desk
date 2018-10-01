import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private registerService: RegisterService) {
  }
    
  universities = ['SUNY Plattsburgh', 'SUNY Binghamton', 'SUNY Jefferson']
  model = new User('Naz', 'Islam', 'male', 'cs', 'plt', 'naz@nazislam.com', 'pwd');

  submitForm(form: NgForm) {
    this.registerService.postUser(this.model)
      .subscribe(
        data => console.log('success:', data),
        err => console.log('error:', err)
      );
  }

  ngOnInit() {
  }

}
