import { Income } from './income.model';

export class IncomeService {
  incomes: Income[] = [
    new Income('Salario', 1500),
    new Income('Venta de coche', 9000),
  ];
}
