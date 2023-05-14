import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';


interface StringMap {
  [key: string]: string;
}

@Component({
  selector: 'app-hiragana-katakana-home-page',
  templateUrl: './hiragana-katakana-home-page.component.html',
  styleUrls: ['./hiragana-katakana-home-page.component.css']
})



export class HiraganaKatakanaHomePageComponent implements OnInit {
    title = 'Hiragana and Katakana Mini-Game'
    description = 'Welcome to my ..............'
    id:any;
    url: string = '/assets/hiragana-katakana.json';
    selectedOption!: string;
    content!: string;
    displayHiragana = true;
    displayKatakana = true;
   


    constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[][]>(this.url).subscribe(res => {
      this.id = res.reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});
    });
  }
  objectKeys(obj: StringMap) {
    return Object.keys(obj);
  }
  showContent() {
    if (this.selectedOption === 'a') {
      this.content = 'jj';
    } else if (this.selectedOption === 'b') {
      // display content for option B
    }
    
  }
  toggleDisplay() {
    this.displayHiragana = !this.displayHiragana;
    this.displayKatakana = !this.displayKatakana;
  }
 
} 


/** 
    */
