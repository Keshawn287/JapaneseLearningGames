import { Component, OnInit  } from '@angular/core';
import characterData from '../assets/hiragana-katakana.json'
import { HttpClient } from '@angular/common/http';

/**
 * 
interface Characters {
  hiragana?: String;
  katakana?: String;
  romaji: String;
}
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test2';

  
}
