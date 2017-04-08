import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements  OnInit {
  constructor() { }
  ngOnInit(){
    //this.dataServiceService.asyncData('Category','http://localhost:3000/categories')
  }
  title = 'app works!';
}
