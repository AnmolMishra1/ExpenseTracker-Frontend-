import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signUp } from './signup';
import { Login } from './login';
import { Observable } from 'rxjs';
import { addExpense } from './addExpense';
import { updateExpense } from './updateExpense';
import { AuthServiceService } from './auth-service.service';
export interface Expense {
  id: number;
  name: string;
  category: string;
  price: number;
  createdAt: Date;
  modifyAt: Date;
}
type SortableFields = keyof Expense;
@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {
  apiUrl = "http://localhost:8081/getExpenses";
  deleteUrl = "http://localhost:8081/deleteExpenses";
  updateUrl = "http://localhost:8081/updateExpenses";
  // constructor(private http: HttpClient) { }

  getExpenses(): Observable<Expense[]> {
    //const url = `${this.apiUrl}?userId=${userId}`;
    return this.http.get<Expense[]>(this.apiUrl, { withCredentials: true });

  }
  // getExpenses() {
  //   return this.http.get("http://localhost:8081/getExpenses");

  // }
  dosignUp(signup: signUp) {
    return this.http.post("http://localhost:8081/signUp", signup, { responseType: 'text' as 'json' });
  }
  dologin(login: Login) {
    return this.http.post("http://localhost:8081/login", login, { withCredentials: true, responseType: 'text' as 'json' });

  }
  // deleteExpense(id: any) {
  //   return this.http.delete(`http://localhost:8081/deleteExpenses/${id}`);
  // }
  deleteExpense(id: number) {
    return this.http.delete(`${this.deleteUrl}/${id}`, { withCredentials: true, responseType: 'text' as 'json' });

  }
  addExpense(add: addExpense) {
    return this.http.post("http://localhost:8081/addExpenses", add, { withCredentials: true, responseType: 'text' as 'json' });
  }
  updateExpense(id: number, update: updateExpense) {
    return this.http.put(`${this.updateUrl}/${id}`, update, { withCredentials: true, responseType: 'text' as 'json' });
  }
  totalPrice() {
    return this.http.get("http://localhost:8081/totalExpensePrice", { withCredentials: true });
  }
  constructor(private http: HttpClient, private authService: AuthServiceService) { }


}
