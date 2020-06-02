import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navch',
  templateUrl: './navch.component.html',
  styleUrls: ['./navch.component.css']
})
export class NavchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //   const navToggle = document.querySelector('.nav-toggle');
  // const nav = document.querySelector('.nav');


  // navToggle.addEventListener('click', () => {
  //     nav.classList.toggle('nav--visible');
  // })
  toggleNav() {
    // var navToggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.nav');
    nav.classList.toggle('nav--visible');
  }

}
