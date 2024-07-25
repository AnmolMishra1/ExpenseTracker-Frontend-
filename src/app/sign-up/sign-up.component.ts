import { Component, OnInit } from '@angular/core';
import { signUp } from '../signup';
import { ExpenseServiceService } from '../expense-service.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-sign-up',
  standalone: true,

  imports: [HttpClientModule, FormsModule, NgIf],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signup: signUp = new signUp("", "", "", "");
  message: any;
  constructor(private service: ExpenseServiceService) { }
  public signUp() {
    let res = this.service.dosignUp(this.signup);
    res.subscribe((data) => this.message = data);
    console.log('signUpworking');
  }
  ngOnInit() {

  }
}


