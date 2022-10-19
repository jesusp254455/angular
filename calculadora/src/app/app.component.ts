import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  constructor(){}
  pant2="";
  operador!: number;
  
  //calculeitor
  port(value:string){ 
    this.pant2 = value;
  }
  div(value:string){ 
    this.pant2 = value;
  }

  num7(value:string){ 
    this.pant2 = this.pant2 +value;
  }

  num8(value:string){ 
    this.pant2 = this.pant2 +value;
  }

  num9(value:string){ 
    this.pant2 = this.pant2 +value;
  }

  multi(value:string){ 
    this.pant2 = value;
  }

  num4(value:string){ 
    this.pant2 = this.pant2 +value;
  }
  num5(value:string){ 
    this.pant2 = this.pant2 +value;
  }
  num6(value:string){ 
    this.pant2 = this.pant2 +value;
  }

  menos(value:string){ 
    this.pant2 = value;
  }

  num1(value:string){ 
    this.pant2 = this.pant2 +value;
  }

  num2(value:string){ 
    this.pant2 = this.pant2 +value;
  }

  num3(value:string){ 
    this.pant2 = this.pant2 +value;
  }

  suma(value:string){ 
    this.pant2 = value;
  }

  num0(value:string){ 
    this.pant2 = this.pant2 +value;
  }

  punto(value:string){ 
    this.pant2 = value;
  }
}
