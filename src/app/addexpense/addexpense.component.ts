import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { addExpense } from '../addExpense';
import { ExpenseServiceService } from '../expense-service.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addexpense',
  standalone: true,
  imports: [FormsModule, HttpClientModule, NgIf],
  templateUrl: './addexpense.component.html',
  styleUrl: './addexpense.component.css'
})
export class AddexpenseComponent implements OnInit {
  add: addExpense = new addExpense("", 0, "");
  message: any;
  constructor(private service: ExpenseServiceService, private router: Router) { }

  public addExpense() {
    let res = this.service.addExpense(this.add);
    res.subscribe((data) => {
      this.message = data;
      this.router.navigate(['/home']);

    });
    console.log('addworking');

  }

  ngOnInit() {

  }

}
