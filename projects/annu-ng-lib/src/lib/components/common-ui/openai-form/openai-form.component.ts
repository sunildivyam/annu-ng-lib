import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { OpenaiPrompt } from './openai-form.interface';

@Component({
  selector: 'anu-openai-form',
  templateUrl: './openai-form.component.html',
  styleUrls: ['./openai-form.component.scss']
})
export class OpenaiFormComponent implements OnInit, OnChanges {
  @Input() prompts: Array<OpenaiPrompt> = [];
  @Input() showHistory: boolean = true;

  @Output() goClicked = new EventEmitter<Array<OpenaiPrompt>>();

  currentPrompt: string = '';
  showPrompts: boolean = false;
  selectedPrompt: OpenaiPrompt;
  selectedPromptText: string = '';
  selectedResultType: string = 'mdText';

  constructor() {
  }

  ngOnInit(): void {
    this.setSelectedPrompt();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setSelectedPrompt();
  }

  public setSelectedPrompt(): void {
    this.selectedPrompt = this.findPrompt(this.selectedPromptText);
  }

  public promptListChanged(): void {
    this.setSelectedPrompt();
  }

  public goBtnClick(event: any): void {
    event.preventDefault();
    if (!this.currentPrompt.trim()) return;

    if (!this.findPrompt(this.currentPrompt)) {
      this.prompts.push({ prompt: this.currentPrompt, message: { mdText: '', htmlText: '', jsonText: ''} } as OpenaiPrompt);

      this.selectedPromptText = this.currentPrompt;
      this.selectedPrompt = this.findPrompt(this.selectedPromptText);

      this.currentPrompt = '';
      this.goClicked.emit(this.prompts);
    }
  }

  private findPrompt(promptStr: string): OpenaiPrompt {
    return this.prompts.find(p => p.prompt === promptStr)
  }
}
