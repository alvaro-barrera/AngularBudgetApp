import { Component, OnInit } from '@angular/core';
import { Income } from './income.model';
import { IncomeService } from './income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
})
export class IncomeComponent implements OnInit {
  incomes: Income[] = [];
  constructor(private incomeService: IncomeService) {}

  ngOnInit(): void {
    this.incomes = this.incomeService.incomes;
  }

  deleteRecord(income: Income) {
    this.incomeService.delete(income);
  }
}
