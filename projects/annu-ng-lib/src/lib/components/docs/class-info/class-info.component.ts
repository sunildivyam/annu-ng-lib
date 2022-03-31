import { Component, Input, OnInit } from '@angular/core';
import { ClassInfo } from '../docs.interface';

@Component({
  selector: 'anu-class-info',
  templateUrl: './class-info.component.html',
  styleUrls: ['./class-info.component.scss']
})
export class ClassInfoComponent implements OnInit {
  @Input() classInfo: ClassInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
