import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user;

  constructor() { }

  ngOnInit() {
    let user = localStorage.getItem('user');
    this.user = JSON.parse(user);
  }

}
