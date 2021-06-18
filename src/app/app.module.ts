import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { HeaderComponent } from './header/header.component';
import { ExpenseService } from './expense/expense.service';
import { IncomeService } from './income/income.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    IncomeComponent,
    ExpenseComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule],
  providers: [IncomeService, ExpenseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
