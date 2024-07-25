import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Expense, ExpenseServiceService } from '../expense-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [NgFor, HttpClientModule, FormsModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent implements OnInit {
  username: string | null = null;
  expenses: Expense[] = [];
  filteredExpenses: Expense[] = [];
  sortBy: keyof Expense = 'name';
  filterBy: string = '';
  TotalPrice: any;

  constructor(
    private service: ExpenseServiceService,
    private route: Router,
    private authService: AuthServiceService) { }

  totalPrice(): void {
    this.service.totalPrice().subscribe((data) => {
      this.TotalPrice = data;
    })
  }
  loadExpenses(): void {
    this.service.getExpenses().subscribe((data: Expense[]) => {
      this.expenses = data;
      this.filteredExpenses = data;
    });
  }
  ngOnInit(): void {
    this.loadExpenses();
    this.totalPrice();

    this.username = this.authService.getUsername();
  }
  public deleteById(id: number): void {
    console.log("deleteWorking");
    this.service.deleteExpense(id).subscribe(() => {
      this.loadExpenses();
      this.filteredExpenses = this.filteredExpenses.filter(expense => expense.id !== id);
    });

  }
  updateExpense(id: number): void {
    this.route.navigate(['/updateExpense', id]); // Navigate to update route with ID
  }

  printExpenses(): void {
    const printContents = document.getElementById('printSection')!.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  }
  logout() {
    this.authService.logout();
    this.route.navigate(['/']);
    console.log("logout Working");
  }
  addExpense() {
    this.route.navigate(['/addExpense']);
  }
  applyFilters(): void {
    this.filteredExpenses = this.expenses;
    if (this.filterBy) {
      this.filteredExpenses = this.filteredExpenses.filter(expense => expense.category === this.filterBy);
    }

    console.log("filterWorking");
    console.log("Filter by:", this.filterBy);
    console.log("Sort by:", this.sortBy);
    if (this.sortBy) {
      this.filteredExpenses.sort((a, b) => {
        const aValue = a[this.sortBy];
        const bValue = b[this.sortBy];

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return aValue.localeCompare(bValue);
        } else if (this.sortBy === 'createdAt') {

          return new Date(aValue).getTime() - new Date(bValue).getTime();
        } else {

          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        }
      });
    }
  }

}
