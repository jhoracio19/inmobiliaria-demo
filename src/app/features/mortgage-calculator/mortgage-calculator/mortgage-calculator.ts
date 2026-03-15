import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mortgage-calculator',
  imports: [CommonModule, FormsModule],
  templateUrl: './mortgage-calculator.html',
})
export class MortgageCalculator {
  price = 3000000;
  downPayment = 20;
  interest = 9;
  years = 20;

  monthlyPayment = 0;

  calculate() {
    const loanAmount = this.price * (1 - this.downPayment / 100);

    const monthlyRate = this.interest / 100 / 12;

    const payments = this.years * 12;

    this.monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -payments));
  }
}
