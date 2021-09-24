import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

interface LabeledValue {
  label: string;
  id: number;
} 

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {

  backlog: LabeledValue[] = [{label: "Ir al supermercado", id: 1
}];
  todo: LabeledValue[] = [];
  ongoing: LabeledValue[] = [];
  done: LabeledValue[] = [];
  tarea = "";
  lastId = 1;



  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  agregarTarea() {

    if(this.tarea === ""){
      return;
    }

    this.lastId = this.lastId+1;
    this.backlog.push({label:this.tarea, id: this.lastId});
    this.tarea = "";
  }
  eliminarTarea(item):void {
    if(this.tarea === ""){
      this.backlog = this.backlog.filter(tareaBacklog  => tareaBacklog.id !== item.id)
      this.todo = this.todo.filter(tareaBacklog  => tareaBacklog.id !== item.id)
      this.ongoing = this.ongoing.filter(tareaBacklog  => tareaBacklog.id !== item.id)
      this.done = this.done.filter(tareaBacklog  => tareaBacklog.id !== item.id)
    }
  } 


  
}
