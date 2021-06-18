import { Component } from '@angular/core';
import { Expense } from './expense/expense.model';
import { ExpenseService } from './expense/expense.service';
import { Income } from './income/income.model';
import { IncomeService } from './income/income.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'presupuesto-app';

  incomes: Income[] = [];
  expenses: Expense[] = [];

  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpenseService
  ) {
    this.incomes = incomeService.incomes;
    this.expenses = expenseService.expenses;
  }

  getIncomeTotal() {
    let incomeTotal: number = 0;
    this.incomes.forEach((income) => {
      incomeTotal += income.value;
    });

    return incomeTotal;
  }

  getExpenseTotal() {
    let expenseTotal: number = 0;
    this.expenses.forEach((expense) => {
      expenseTotal += expense.value;
    });

    return expenseTotal;
  }

  getPercentageTotal() {
    return this.getExpenseTotal() / this.getIncomeTotal();
  }

  getBudgetTotal() {
    return this.getIncomeTotal() - this.getExpenseTotal();
  }
}
