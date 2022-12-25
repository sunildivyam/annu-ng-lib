import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToolbarItem } from '../toolbar/toolbar.interface';
import { HighlightService } from './highlight.service';
import { CODE_BLOCK_TOOLBAR_ITEMS } from './code-block.constants';
import { SourceLanguage } from './code-block.interface';
/**
 * CodeBlock Component applies the formatting and highlighting of the source code
 * and renders the source code in <code>\<pre\></code> and <code>\<code\></code> html tag.
 * This uses Primejs javascript library for this purpose.
 * Component supports many other languages including javascript, typescript, scss, sass, css, markup etc..
 */
@Component({
  selector: 'anu-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss']
})
export class CodeBlockComponent implements OnInit, OnChanges {

  /**
   * Source code that needs to be highlighted.
   */
  @Input() source: string;

   /**
   * Source code language, ie. one of the supported language name.
   */
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
  sourceLanguages: Array<SourceLanguage> = [];

  //SourceForm bound variables
  newSource: string = '';
  newSourceLanguage: string = '';

  constructor(private hltService: HighlightService) {
    this.sourceLanguages = this.hltService.getSourceLanguagesList();
  }

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
    if (this.showSourceForm === true) {
      this.newSource = this.source;
      this.newSourceLanguage = this.language;
    }
  }

  public modalOkClicked(modalOpened: boolean): void {
    this.showSourceForm = modalOpened;
    this.source = this.newSource;
    this.language = this.newSourceLanguage;
    this.highlightSource();
  }

  public modalCancelClicked(modalOpened: boolean): void {
    this.showSourceForm = modalOpened;
  }
}
