import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from './expense/expense.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
// const routes: Routes = [
//     { path: 'home', component: ExpenseComponent },  // Define homepage route
//     { path: 'signUp', component: SignUpComponent },
//     { path: 'login', component: LoginComponent }
//     // Add other routes as needed
// ];
// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
export class AppRoutingModule { }
