import { Component, OnInit } from '@angular/core';
import { ToolbarItem } from '@annu-ng-lib';

@Component({
  selector: 'anu-toolbar-page',
  templateUrl: './toolbar-page.component.html',
  styleUrls: ['./toolbar-page.component.scss']
})
export class ToolbarPageComponent implements OnInit {
  formattingToolbar: Array<ToolbarItem>;

  constructor() {
    this.formattingToolbar = [
      {
        name: 'bold',
        title: 'Bold',
        label: 'B',
        icon: '',
      } as ToolbarItem,
      {
        name: 'italic',
        title: 'Italic',
        label: 'I',
        icon: '',
      } as ToolbarItem,
      {
        name: 'underline',
        title: 'Underline',
        label: 'U',
        icon: '',
      } as ToolbarItem,
      {
        name: 'link',
        title: 'Hyperlink',
        label: '',
        icon: '&#128279;',
      } as ToolbarItem
    ]
  }

  ngOnInit(): void {
  }

  public toolbarClicked(item: ToolbarItem): void {
    console.log(item.title);
  }
}
