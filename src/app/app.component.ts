import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
list: string[] = []; 

addToList(input1){
  console.log(input1);
  this.list.push(input1);
  console.log(this.list);
  return this.list;
}

}