import { Component, signal } from '@angular/core';
import{CommonModule} from '@angular/common'
import { Task } from '../../models/task.model';
import { combineLatest } from 'rxjs';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

  newTaskControl = new FormControl('',{
    nonNullable: true,
    validators: [Validators.required]
  })

  addTask(){
    if(this.newTaskControl.valid){
      const value = this.newTaskControl.value.trim();
      if(value !==""){
        this.configureTask(value);
        this.newTaskControl.setValue("");
      }else{
        alert("La tarea no puede estar vacia.")
      }
      /* agregamos un elemento al final de la lista */

    }



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
  enterEditMode(index: number){
    this.tasks.update(prevState =>{
      return prevState.map((task,position) =>
        {
        if(position===index){
          return{
            ...task,
            editing: true
          }
        }
        return{
          ...task,
          editing: false
        };
      })
    })
    }
    exitEditMode(index: number, event:Event){
      const input = event.target as HTMLInputElement;
      this.tasks.update(prevState =>{
        return prevState.map((task,position)=>{
          if(position === index){
            return{
              ...task,
              title : input.value,
              editing: false
            }
          }return task
        })
      })
    }
}
