import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToolbarItem } from '../toolbar/toolbar.interface';
import { HighlightService } from './highlight.service';
import { CODE_BLOCK_TOOLBAR_ITEMS, SOURCE_LANGUAGES } from './code-block.constants';
/**
 * CodeBlock Component applies the formatting and highlighting of the source code
 * and renders the source code in <code>\<pre\></code> and <code>\<code\></code> html tag.
 * This uses Primejs javascript library for this purpose.
 * Component supports these languages - javascript, typescript, scss, sass, css, and markup.
 */
@Component({
  selector: 'anu-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss']
})
export class CodeBlockComponent implements OnInit, OnChanges {
  @Input() source: string;
  @Input() language = 'typescript';


  /**
   * <code>readonly</code> property if true, shows the highlighted code block,
   * and does not allow to edit the source code and its language.
   * If false, edit toolbar becomes visible, and user can update source code and its language.
   */
  @Input() readonly: boolean = true;


  highlightedSource: string = '';
  toolbarItems: Array<ToolbarItem> = [...CODE_BLOCK_TOOLBAR_ITEMS];
  showSourceForm: boolean = false;
  sourceLanguages = [...SOURCE_LANGUAGES];

  constructor(private hltService: HighlightService) { }

  private highlightSource() {
    setTimeout(() => this.highlightedSource = this.hltService.highlight(this.source, this.language));
  }

  ngOnInit(): void {
    this.highlightSource();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.highlightSource();
  }

  public toolbarChanged(selectedItem: ToolbarItem): void {
    this.showSourceForm = !this.showSourceForm;
  }

  public modalOkClicked(modalOpened: boolean): void {
    this.showSourceForm = modalOpened;
    this.highlightSource();
  }

  public modalCancelClicked(modalOpened: boolean): void {
    this.showSourceForm = modalOpened;
  }
}
