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
  pant1="";
  operador!: string;
  c= "";
  parentesis= true;
   res!: number;
   br:string= "";
   puntos=false;
  //calculeitor
  port(){ 
    this.operador = "%";
    if(this.operador == "%"){
      this.pant1 = this.pant2;
      this.pant2 = "";
    }
  }
  div(){ 
    this.operador = "/";
    if (this.operador == "/") {
        this.pant1 = this.pant2;
        this.pant2 = "";
    }
    
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

  multi(){ 
    this.operador = "x";
    if(this.operador == "x"){
      this.pant1 = this.pant2;
      this.pant2 = "";
    }

    
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

  menos(){ 
    this.operador = "-";
    if (this.operador == "-") {
      this.pant1 = this.pant2;
      this.pant2 = " ";
    }
    
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

  suma(){ 
    this.operador = "+"
    if(this.operador == "+"){
    this.pant1 = this.pant2;
    this.pant2 = " ";
    }
    
  }

  num0(value:string){ 
    this.pant2 = this.pant2 +value;
  }

  punto(){ 
    if (this.puntos == false) {
      this.pant2 =this.pant2+","
    }
  }

  borrat(value:string){
    this.pant2 = value;
    this.pant1 = value;
  }

  parent(){
    if(this.parentesis == true){
      this.pant2 = this.pant2 + "(";
    this.parentesis = false;
    }
    else if( this.parentesis == false){
      this.pant2 = this.pant2 + ")";
      this.parentesis = true;
    }
  }
  f1(masmenos:string) {
      this.pant2 = masmenos;
    }

    igual(){
      this.puntos = false;
      if(this.operador == "+"){
      this.res = Number(this.pant1) + Number(this.pant2);
        this.pant1 = " ";
        this.pant2 = this.res.toString();
      }
      if(this.operador == "-"){
        this.res = Number(this.pant1) - Number(this.pant2);
          this.pant1 = " ";
          this.pant2 = this.res.toString();
        }
        if(this.operador == "x"){
          this.res = Number(this.pant1) * Number(this.pant2);
            this.pant1 = " ";
            this.pant2 = this.res.toString();
          }
          if(this.operador == "/"){
            this.res = Number(this.pant1) / Number(this.pant2);
              this.pant1 = " ";
              this.pant2 = this.res.toString();
            }
            if(this.operador == "%"){
              this.res = Number(this.pant2) * Number(this.pant1) / 100;
              this.pant1 = " ";
              this.pant2 = this.res.toString();
            }
    }    

    borra1(){
      for( let b = 0; b < this.pant2.length-1; b++){
        this.br =this.br+this.pant2[b];
      }
      this.pant2=this.br;
      this.br = "";
    }
}
