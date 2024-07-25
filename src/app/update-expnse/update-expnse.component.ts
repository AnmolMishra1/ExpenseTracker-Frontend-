import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { updateExpense } from '../updateExpense';
import { ExpenseServiceService } from '../expense-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-expnse',
  standalone: true,
  imports: [NgIf, FormsModule, HttpClientModule],
  templateUrl: './update-expnse.component.html',
  styleUrl: './update-expnse.component.css'
})
export class UpdateExpnseComponent implements OnInit {
  expenseId: any;
  update: updateExpense = new updateExpense("", 0, "");
  message: any;
  constructor(private service: ExpenseServiceService, private route: ActivatedRoute, private router: Router) { }

  public updateExpense() {
    let res = this.service.updateExpense(this.expenseId, this.update);
    res.subscribe((data) => {

      this.message = data;
      this.router.navigate(['/home']);
    });
    console.log('Updateworking');
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.expenseId = id;
    }

  }
}
