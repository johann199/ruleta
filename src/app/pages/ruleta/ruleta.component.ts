import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Jugador } from 'src/app/models/jugador';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styles: ['./ruleta.component.css']
})
export class RuletaComponent implements OnInit {
  jugadorArray: Jugador[] = [
    {id: 1, nombre:"juan", valor: 15000, valorGanado:0},
    {id: 2, nombre:"maria", valor: 15000, valorGanado:0},
    {id: 3, nombre:"luis", valor: 15000, valorGanado:0},
    {id: 4, nombre:"daniela", valor: 15000, valorGanado:0}
  ]; 
  selectedJugador: Jugador = new Jugador();
  giro: number = 0; 
  vueltas = 2; 
  valor: any; 
  @ViewChild('ruleta') ruleta : ElementRef;
  @ViewChild('audio') audio : ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  giros(){
    if (this.giro < this.vueltas){
      let rand = Math.random()*7200; 
      this.calcular(rand); 
      this.giro++; 
      this.audio.nativeElement.play(); 
    }
  }
  apostar(valor: number , color: string){
    if(this.selectedJugador.valor <= 1000){
      alert('ya no puedes apostar'); 
    }
    switch(true){
      case color == 'rojo': 
       this.selectedJugador.valorGanado = this.selectedJugador.valor*2
       break; 
      case color =='negro':
        this.selectedJugador.valorGanado = this.selectedJugador.valor*2
      break; 
      case color =='verde':
        this.selectedJugador.valorGanado = this.selectedJugador.valor*10
        break;
    }

  }

  premio(premios){
    
    console.log(premios); 
  }

  calcular(rand){
    this.valor = rand / 360; 
    this.valor = (this.valor - parseInt(this.valor.toString().split(".")[0]))*360; 
    // console.log(this.valor);

    this.ruleta.nativeElement.style.transform= `rotate(${rand}deg)`; 
    setTimeout(() =>{
      switch(true){
        case this.valor > 0 && this.valor <= 10: 
          this.premio('verde')
          break; 
        case this.valor >=11 && this.valor <=20:
          this.premio('rojo')
          break;
        case this.valor >=21 && this.valor <=30:
          this.premio('negro')
          break;
        case this.valor >=31 && this.valor <=40:
          this.premio('rojo')
          break;
        case this.valor >=41 && this.valor <=50:
          this.premio('negro')
          break;
        case this.valor >=51 && this.valor <=60:
          this.premio('rojo')
          break;
        case this.valor >=61 && this.valor <=70:
          this.premio('negro')
          break;
        case this.valor >=71 && this.valor <=80:
          this.premio('rojo')
          break;
        case this.valor >=81 && this.valor <=90:
          this.premio('negro')
          break;
        case this.valor >=91 && this.valor <=100:
          this.premio('rojo')
          break;
        case this.valor >=101 && this.valor <=110:
          this.premio('negro')
          break;
        case this.valor >=111 && this.valor <=120:
          this.premio('rojo')
          break;  
        case this.valor >=121 && this.valor <=130:
          this.premio('negro')
          break;
        case this.valor >=131 && this.valor <=140:
          this.premio('rojo')
          break;
        case this.valor >=141 && this.valor <=150:
          this.premio('negro')
          break;
        case this.valor >=151 && this.valor <=160:
          this.premio('rojo')
          break;
        case this.valor >=161 && this.valor <=170:
          this.premio('negro')
          break;
        case this.valor >=171 && this.valor <=180:
          this.premio('rojo')
          break;
        case this.valor >=181 && this.valor <=190:
          this.premio('negro')
          break;
        case this.valor >=191 && this.valor <=200:
          this.premio('rojo')
          break;
        case this.valor >=201 && this.valor <=210:
          this.premio('negro')
            break;
        case this.valor >=211 && this.valor <=220:
          this.premio('rojo') 
            break;
        case this.valor >=221 && this.valor <=230:
          this.premio('negro')
            break;
        case this.valor >=231 && this.valor <=240:
          this.premio('rojo')
            break;
        case this.valor >=241 && this.valor <=250:
          this.premio('negro')
            break;
        case this.valor >=251 && this.valor <=260:
          this.premio('rojo')
            break;
        case this.valor >=261 && this.valor <=270:
          this.premio('negro')
            break;
        case this.valor >=271 && this.valor <=280:
          this.premio('rojo')
            break;
        case this.valor >=281 && this.valor <=290:
          this.premio('negro')
            break;
        case this.valor >=291 && this.valor <=300:
          this.premio('rojo')
            break;
        case this.valor >=301 && this.valor <=310:
          this.premio('negro')
            break;
        case this.valor >=311 && this.valor <=320:
          this.premio('rojo')
            break;
        case this.valor >=321 && this.valor <=330:
          this.premio('negro')
            break;
        case this.valor >=331 && this.valor <=340:
          this.premio('rojo')
            break;
        case this.valor >=341 && this.valor <=350:
          this.premio('negro')
            break;
        case this.valor >=351 && this.valor <=360:
           this.premio('rojo')
            break;
      }
    }, 5000)
    
  }
  addOrEdit(){
    if (this.selectedJugador.id==0){
      this.selectedJugador.id = this.jugadorArray.length + 1;
      this.jugadorArray.push(this.selectedJugador); 
    }
    this.selectedJugador = new Jugador();
  }
  openEdit(jugador: Jugador){
    this.selectedJugador = jugador; 
  }
  delete(){
    if(confirm('¿Deseas eliminar este jugador?')){
      this.jugadorArray = this.jugadorArray.filter(i => i != this.selectedJugador); 
      this.selectedJugador = new Jugador(); 
    }
   
  }

}
