import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense/expense.model';
import { ExpenseService } from '../expense/expense.service';
import { Income } from '../income/income.model';
import { IncomeService } from '../income/income.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  operationType: string="income";
  descriptionInput: string;
  valueInput:number;

  constructor(private incomeService:IncomeService, private expenseService:ExpenseService) { }

  ngOnInit(): void {
  }

  handleOperationType(event){
    this.operationType = event.target.value;
  }
  handleNewRecord(){
    if(this.operationType === "income"){
      this.incomeService.incomes.push(
        new Income(this.descriptionInput,this.valueInput)
      );
      this.clearForm();
    }
    if(this.operationType === "expense"){
      this.expenseService.expenses.push(
        new Expense(this.descriptionInput,this.valueInput)
      );
      this.clearForm();
    }
  }

  clearForm(){
    this.descriptionInput = "";
    this.valueInput = null;
  }

}
