import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Woof - Dog Care System';
  toggleView:boolean = true;
  
  test():void{
    console.log("hi");
    if(this.toggleView){
      this.toggleView = false;
    }
  }
  
}
