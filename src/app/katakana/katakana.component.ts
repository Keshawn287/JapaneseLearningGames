import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface StringMap {
  [key: string]: string;
}

@Component({
  selector: 'app-katakana',
  templateUrl: './katakana.component.html',
  styleUrls: ['./katakana.component.css']
})
export class KatakanaComponent implements OnInit {

  id:any;
  url: string = '/assets/hiragana-katakana.json';
  selectedOption!: string;
  content!: string;
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
     // display content for option B
    } else if (this.selectedOption === 'b') {
      // display content for option B
    }
    
  }
  toggleDisplay() {
    this.displayKatakana = !this.displayKatakana;
  }
  
}
