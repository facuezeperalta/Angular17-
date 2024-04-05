import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
  welcomme = "Hola! desde una variable desde la lógica!"
  tasks = [
    "Instalar Angular CLI",
    "Crear Proyecto",
    "Crear componentes",
    "Ser constante con la práctica"
  ]
  name = "Facundo Peralta";
  age = 28;
  image = "https://s1.eestatic.com/2020/07/21/omicrono/hardware/fotografia-hardware-hardware_506960175_156187018_1706x960.jpg";
  usuario ={
    name : "Ezequiel",
    apellido: "Peralta",
    avatar: "https://cdn-icons-png.flaticon.com/512/3541/3541871.png",
    age: 28
  }
  clickHandler(){
    alert("Hola!")
  }
  changeHandler(event:Event){
    console.log()
  }
  keyDownHandler(event: KeyboardEvent){
    const input =  event.target as HTMLInputElement;
    console.log(input.value);
  }
}
