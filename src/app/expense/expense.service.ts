import { Expense } from './expense.model';

export class ExpenseService {
  expenses: Expense[] = [new Expense('Renta', 500), new Expense('Ropa', 200)];
}
