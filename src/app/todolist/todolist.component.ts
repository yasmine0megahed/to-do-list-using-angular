import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule,NgClass],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  list:{task:string;iscomplete:boolean}[]=[]
  // list: string[] = [];
  inputValue: string = '';
  isClassAdded: boolean = false;
  onadd(){
   if (this.inputValue.trim() !== '') { // Ensure input value is not empty
      // this.list.push(this.inputValue); // Add input value to the array
      this.list.push({task:this.inputValue,iscomplete:false})
      this.inputValue = ''; // Clear the input field
      console.log(this.list);
    }
  }
  // tasks: string[] = this.list.map(item => item.task);
oncomplete(index:number){
  this.list[index].iscomplete=true;
}

ondelete(index:number){
  console.log('delete');
  console.log(index);
  this.list.splice(index,1);
}
}
