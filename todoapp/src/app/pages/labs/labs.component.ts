import { Component, signal } from '@angular/core';
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
  tasks =signal([
    "Instalar Angular CLI",
    "Crear Proyecto",
    "Crear componentes",
    "Ser constante con la práctica"
  ]);
  person =signal({
    name: "facundo",
    age: 18
  });
  name = signal("Facundo Peralta");
  age = 28;
  image = "https://s1.eestatic.com/2020/07/21/omicrono/hardware/fotografia-hardware-hardware_506960175_156187018_1706x960.jpg";
  usuario = signal ({
    name : "facundos",
    apellido: "Peralta",
    avatar: "https://cdn-icons-png.flaticon.com/512/3541/3541871.png",
    age: 28
  });
  clickHandler(){
    alert("Hola!")
  }
  changeHandler(event:Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }
  keyDownHandler(event: KeyboardEvent){
    const input =  event.target as HTMLInputElement;
    console.log(input.value);
  }
  changeAge(event:Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.usuario.update(prevState => {
      return {
        ...prevState,
        age: parseInt(newValue)
      }
    })
  }
  changeName(event:Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return{
        ...prevState,
        name: newValue
      }
    })
  }
}
