import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../login';
import { ExpenseServiceService } from '../expense-service.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  login: Login = new Login("", "");
  message: any;
  constructor(private service: ExpenseServiceService, private router: Router, private authService: AuthServiceService) { }

  public Login() {
    this.service.dologin(this.login).subscribe((data) => {
      this.message = data;
      console.log('Login working', this.message);
      if (this.message === "Login Successfully") {
        // this.authService.setUsername(this.login.username);
        this.authService.login(this.login.username);
        alert("Login Successfully");
        this.router.navigate(['/home']);
      }
    });
  }
  ngOnInit() {
  }

}
