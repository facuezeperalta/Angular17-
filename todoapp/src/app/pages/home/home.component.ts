import { Component, signal } from '@angular/core';
import{CommonModule} from '@angular/common'
import { Task } from '../../models/task.model';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  tasks  = signal<Task[]>([
    {
      id: 1,
      title: "Crear proyecto en Angular",
      completed: false
    },
    {
      id: 4,
      title: "Crear elementos",
      completed:false
    },
    {
      id: 2,
      title:"Crear mi web de fotografía",
      completed: false
    },
    {
      id:3,
      title: "Aprender algo nuevo todos los días",
      completed: false
    },
    {
      id: 123,
      title: "hola",
      completed: false
    }
  ])
  addTask(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
     /* agregamos un elemento al final de la lista */
    this.configureTask(newTask);
     input.value = "";
  };

  configureTask(title:string){
    const newTask ={
      id : Date.now(),
      title,
      completed: false
    }
    this.tasks.update((tasks) => [...tasks,newTask]);

  }

  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((task,position) => position!== index) ); /* filtramos el array de tasks para crear otro nuevo y asi respetar la inmutabilidad  */
  }
  updateTask(index: number){
    this.tasks.update((tasks) => {
      return  tasks.map((task,position) =>{
        if(position === index){
          return{
            ...task,
            completed : !task.completed
          }
        }
        return task;
      })
    })
  }

}
