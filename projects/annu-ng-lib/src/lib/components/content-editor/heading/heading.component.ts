import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditorElement } from '../content-editor.interface';

@Component({
  selector: 'anu-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  @Input() value: EditorElement;
  @Output() enterKeyPressed = new EventEmitter<EditorElement>();
  @Output() changed = new EventEmitter<EditorElement>();

  constructor() { }

  ngOnInit(): void {
  }

  public enterPressed(event: any, value: EditorElement): void {
    event.preventDefault();
    this.enterKeyPressed.emit(value);
  }

  public contentChanged() {
    this.changed.emit(this.value);
  }
}
