import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class LandingComponent {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService) {}

  submitForm(form: any) {
    if (form.valid) {
      const isValidUser = this.loginService.validateUser(this.username, this.password);

    if (isValidUser) {
      alert('You are allowed. Now click on the links on the nav bar!');
      } else {
          alert('You are not allowed.To access the links on nav bar!');
      }
    }
  }
}
