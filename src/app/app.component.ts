import { Component } from '@angular/core';
import { TodoService } from './todo.service'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
list: string[] = []; 

constructor (private _todo: TodoService){
  this.list = this._todo.list; 
}

// addToList(input1){
//   this.list.push(input1);
//   return this.list;
// }

addToList(todo){
  this._todo.addToListService(todo);
  this.todo = ""; 
}


// deleteFromList(todo){
//   let indexTodo = this.list.indexOf(todo);  
//   this.list.splice(indexTodo, 1); 
// }

deleteFromList(todo){
 this._todo.deleteFromListService(todo); 
}

}