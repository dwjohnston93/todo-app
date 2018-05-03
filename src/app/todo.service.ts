import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
    
    list: string[] = []; 

  constructor() { }

addToListService(input1){
  this.list.push(input1);
  return this.list;
}

deleteFromListService(todo){
  let indexTodo = this.list.indexOf(todo);  
  this.list.splice(indexTodo, 1); 
}


}
