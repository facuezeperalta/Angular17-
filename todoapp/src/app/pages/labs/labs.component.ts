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
  age = 28
}
