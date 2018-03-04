import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "this is title date from header component";

  msg : any;

  constructor() { } //constructor method

  ngOnInit() {    //life cycle method

    this.msg = " init data ";
  }

}
