import { Component, signal } from '@angular/core';
import{CommonModule} from '@angular/common'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  tasks = signal([
    "Instalar Angular CLI",
    "Crear Proyecto",
    "Crear componentes",
    "Ser constante con la práctica",
    "Hacer mi web de fotografía"
  ])
}
