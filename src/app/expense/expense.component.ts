import { Component, Input, OnInit } from '@angular/core';
import { Expense } from './expense.model';
import { ExpenseService } from './expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expenses: Expense[] = [];
  @Input() incomeTotal: number;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenses = this.expenseService.expenses;
  }

  deleteRecord(expense: Expense){
    this.expenseService.delete(expense);
  }

  calculatePercentage(expense: Expense){
    return expense.value/this.incomeTotal;
  }

}
