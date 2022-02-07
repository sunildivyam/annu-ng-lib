import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anu-spinner-page',
  templateUrl: './spinner-page.component.html',
  styleUrls: ['./spinner-page.component.scss']
})
export class SpinnerPageComponent implements OnInit {
  sizes = ['sm', 'md', 'lg'];
  themes = ['primary', 'secondary'];
  speeds = ['slow', 'normal', 'fast'];

  show = true;
  size = 'md';
  speed = 'normal';
  theme = 'primary';
  fullscreen = false;

  constructor() { }

  ngOnInit(): void {
  }

}
