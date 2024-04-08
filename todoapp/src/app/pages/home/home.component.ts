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
  addTask(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.tasks.update((tasks) => [...tasks,newTask]); /* agregamos un elemento al final de la lista */
    input.value = "";
  };
  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((task,position) => position!== index) ); /* filtramos el array de tasks para crear otro nuevo y asi respetar la inmutabilidad  */
  }

}
