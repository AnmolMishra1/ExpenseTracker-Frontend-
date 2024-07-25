import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ExpenseComponent } from './expense/expense.component';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { UpdateExpnseComponent } from './update-expnse/update-expnse.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: "signUp", component: SignUpComponent },
    { path: "login", component: LoginComponent },
    { path: "home", component: ExpenseComponent, canActivate: [AuthGuard] },
    { path: "addExpense", component: AddexpenseComponent },
    { path: 'updateExpense/:id', component: UpdateExpnseComponent },
    { path: '', component: LandingPageComponent }
];

