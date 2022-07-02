import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning';

  first_name:any
  name:string= 'naveen';
  values=[]
  changeName() {
    this.name = '99'
  }

  increaseValue() {
    console.log(this.first_name)
  }
}
