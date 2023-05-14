import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-hiragana',
  templateUrl: './hiragana.component.html',
  styleUrls: ['./hiragana.component.css']
})
export class HiraganaComponent {
  @Input() inputData!: string;
}