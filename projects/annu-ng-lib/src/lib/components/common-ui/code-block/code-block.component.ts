import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HighlightService } from './highlight.service';

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

  highlightedSource: string = '';

  constructor(private hltService: HighlightService) {}

  private highlightSource() {
    setTimeout(() => this.highlightedSource = this.hltService.highlight(this.source, this.language));
  }

  ngOnInit(): void {
    this.highlightSource();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.highlightSource();
  }
}
