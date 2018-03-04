import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  //prototype
  title = "hello angular 4"; 

  // any keyword
  private msg : any; 

  //Modifiers
  //public  -> defult
  //prototype
  //private
  public username = "Jae";

  //bing data
  public id : string = "1";

  public hNewInfor = " ";

  //obj
  public obj = {
    name : "Jae"
  }
  
  //data loop
  public list = [];

  public list1 = [
    {'title' : '1111'},
    {'title' : '2222'},
    {'title' : '3333'},
  ];

  public brand  = [
    {
      'cate' : 'Honda',
      'list' : [
        {'title' : '328'},
        {'title' : '430'}
      ]
    },
    {
      'cate' : 'Audi',
      'list' : [
        {'title' : 'A4'},
        {'title' : 'A5'}
      ]
    }
  ]

  constructor() {

    this.msg = " chang the data";

    this.hNewInfor = "<h3> init data inforamtion in the constructor</h3>";

    this.list = ['1','2','3'];
    

  }

  ngOnInit() {


  }

}
