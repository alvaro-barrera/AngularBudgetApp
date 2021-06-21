import { Expense } from './expense.model';

export class ExpenseService {
  expenses: Expense[] = [new Expense('Renta', 500), new Expense('Ropa', 200)];

  delete(expense: Expense) {
    const index: number = this.expenses.indexOf(expense);
    this.expenses.splice(index, 1);
  }
}
