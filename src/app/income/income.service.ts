import { Income } from './income.model';

export class IncomeService {
  incomes: Income[] = [
    new Income('Salario', 1500),
    new Income('Venta de coche', 9000),
  ];

  delete(income: Income) {
    const index: number = this.incomes.indexOf(income);
    this.incomes.splice(index, 1);
  }
}
