import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DecimalPipe ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pract-app';

  calcValue: number = 0;
  funcT: any = 'NoFunction'; 

  calcNumber: string = 'noValue';

  firstNumber: number = 0;
  secondNumber: number = 0;

  onclickValue(val: string, type: any ){
     if (type == 'number'){
      this.onNumberclick(val);
     }
     else if (type == 'function'){
      this.onFunctionClick(val);
     }
  }
 
  onNumberclick(val: string) {
    if (this.calcNumber != 'noValue') {
        this.calcNumber = this.calcNumber + val;
    }
    else {
      this.calcNumber = val;
    }

    this.calcValue = parseFloat(this.calcNumber);
  }

  onFunctionClick(val: string){

      if(this.funcT == 'c'){
        this.clearAll();
      }

  else if(this.funcT == 'NoFunction'){
        this.firstNumber = this.calcValue;
        this.calcValue = 0;
        this.calcNumber = 'noValue';
        this.funcT = val;
   }
   else if (this.funcT != 'NoFunction'){
    this.secondNumber = this.calcValue;
    //calculations
    this.valueCalculate(val);
   }
  }

  valueCalculate(val: string){
   if(this.funcT == '+'){
    const Total = this.firstNumber + this.secondNumber;
    this.totalAssignValues(Total, val);
   
   }
   if(this.funcT == '-'){
    const Total = this.firstNumber - this.secondNumber;
    this.totalAssignValues(Total, val);
   
   }
   if(this.funcT == 'X'){
    const Total = this.firstNumber * this.secondNumber;
    this.totalAssignValues(Total, val);
    
   }
   if(this.funcT == '/'){
    const Total = this.firstNumber / this.secondNumber;
    this.totalAssignValues(Total, val);
   
   }
   if(this.funcT == '%'){
    const Total = this.firstNumber % this.secondNumber;
    this.totalAssignValues(Total, val);
   
  }

  }
  totalAssignValues(Total : number, val: string){
    this.calcValue =Total;
    this.firstNumber = Total;
    this.secondNumber = 0;
    this.calcNumber = 'noValue';
    this.funcT = val;
    if(val == '='){
      this.onEqual()
    }
  }

    onEqual(){
      this.firstNumber = 0;
      this.secondNumber = 0;
      this.calcNumber = 'noValue';
      this.funcT = 'NoFunction';
    }

    clearAll(){
      this.firstNumber = 0;
      this.secondNumber = 0;
      this.calcValue = 0;
      this.calcNumber = 'noValue';
      this.funcT = 'NoFunction';
    }

}
 