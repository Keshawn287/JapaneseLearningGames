import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
interface StringMap {
  [key: string]: string;
}
@Component({
  selector: 'app-katakana',
  templateUrl: './katakana.component.html',
  styleUrls: ['./katakana.component.css']
})
export class KatakanaComponent {

 
  
}


/*
 selectedCards: string[] = [];
  id:any;
  url: string = '/assets/hiragana-katakana.json';
  selectedOption!: string;
  content!: string;
  displayKatakana = true;
  cards: [] | undefined;
  

    constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[][]>(this.url).subscribe(res => {
      this.id = res.reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});
      sessionStorage.setItem('data', JSON.stringify(this.id));
    });
  }
  
  objectKeys(obj: StringMap) {
    return Object.keys(obj);
  }

  //buttons to start game
  mainKana = false;
  specialKana = false;
  combinedKana = false;

  aButton = false; //main kana
  kaButton = false;
  saButton = false;
  taButton = false;
  naButton = false;
  haButton = false;
  maButton = false;
  raButton = false;
  yaButton = false;
  waButton = false;

  gaButton = false; //special kana
  zaButton = false;
  daButton = false;
  baButton = false;
  paButton = false;

  kyaButton = false; //combined kana
  shaButton = false;
  chaButton = false;
  hyaButton = false;
  nyaButton = false;
  myaButton = false;
  ryaButton = false;
  gyaButton = false;
  jaButton = false;
  dyaButton = false;
  byaButton = false;
  pyaButton = false;
  

  allMainKanaActive(){
    this.aButton = !this.aButton;
    this.kaButton = !this.kaButton;
    this.saButton = !this.saButton;
    this.taButton = !this.taButton;
    this.naButton = !this.naButton;
    this.haButton = !this.haButton;
    this.maButton = !this.maButton;
    this.raButton = !this.raButton;
    this.yaButton = !this.yaButton;
    this.waButton = !this.waButton;
    
  }
  allMainKanaNotActive(){
    this.aButton = !this.aButton;
    this.kaButton = !this.kaButton;
    this.saButton = !this.saButton;
    this.taButton = !this.taButton;
    this.naButton = !this.naButton;
    this.haButton = !this.haButton;
    this.maButton = !this.maButton;
    this.raButton = !this.raButton;
    this.yaButton = !this.yaButton;
    this.waButton = !this.waButton;
    sessionStorage.setItem
    
  }

  allSpecialKana(){
    this.gaButton = !this.gaButton;
    this.zaButton = !this.zaButton;
    this.daButton = !this.daButton;
    this.baButton = !this.baButton;
    this.paButton = !this.paButton;
    
    
  }
  allCombinedKana(){
    this.kyaButton = !this.kyaButton;
    this.shaButton = !this.shaButton;
    this.chaButton = !this.chaButton;
    this.hyaButton = !this.hyaButton;
    this.nyaButton = !this.nyaButton;
    this.myaButton = !this.myaButton;
    this.ryaButton = !this.ryaButton;
    this.gyaButton = !this.gyaButton;
    this.jaButton = !this.jaButton;
    this.dyaButton = !this.dyaButton;
    this.byaButton = !this.byaButton;
    this.pyaButton = !this.pyaButton;
    
  }
  changeAButton(){
    this.aButton = !this.aButton;

  }
  changeGaButton(){
    this.gaButton = !this.gaButton;

  }
  changeKyaButton(){
    this.kyaButton = !this.kyaButton;

  }
  

  activateAllKana(){
    this.mainKana = true;
    this.specialKana = true;
    this.combinedKana = true;

    this.aButton = true;
    this.kaButton = true;
    this.saButton = true;
    this.taButton = true;
    this.naButton = true;
    this.haButton = true;
    this.maButton = true;
    this.raButton = true;
    this.yaButton = true;
    this.waButton = true;

    this.gaButton = true;
    this.zaButton = true;
    this.daButton = true;
    this.baButton = true;
    this.paButton = true;
    

    this.kyaButton = true;
    this.shaButton = true;
    this.chaButton = true;
    this.hyaButton = true;
    this.nyaButton = true;
    this.myaButton = true;
    this.ryaButton = true;
    this.gyaButton = true;
    this.jaButton = true;
    this.dyaButton = true;
    this.byaButton = true;
    this.pyaButton = true;

  }
  <div class="container">
  <section>
    <h3>Main Kana</h3>
    <button class="button"mat-button ="!mainKana" (click)="allMainKanaActive()">All Main Kana</button>
    <button class="button"mat-button ="!aButton" (click)="changeAButton()" >{{ aButton }} a</button>
    <button class="button"mat-button [disabled]="!kaButton" >ka</button>
    <button class="button"mat-button [disabled]="!saButton" >sa</button>
    <button class="button"mat-button [disabled]="!taButton" >ta</button>
    <button class="button"mat-button [disabled]="!naButton" >na</button>
    <button class="button"mat-button [disabled]="!haButton" >ha</button>
    <button class="button"mat-button [disabled]="!maButton" >ma</button>
    <button class="button"mat-button [disabled]="!raButton" >ra</button>
    <button class="button"mat-button [disabled]="!yaButton" >ya</button>
    <button class="button"mat-button [disabled]="!waButton" >wa</button>
  </section>

  <section>
    <h3>Special Kana</h3>
    <button class="button"mat-button ="!mainKana" (click)="allSpecialKana()">All Special Kana</button>
    <button class="button"mat-button ="!gaButton" (click)="changeGaButton()" >{{ gaButton }} ga</button>
    <button class="button"mat-button [disabled]="!zaButton" >za</button>
    <button class="button"mat-button [disabled]="!daButton" >da</button>
    <button class="button"mat-button [disabled]="!baButton" >ba</button>
    <button class="button"mat-button [disabled]="!paButton" >pa</button>
  </section>

  <section>
    <h3>Combined Kana</h3>
    <button class="button"mat-button ="!mainKana" (click)="allCombinedKana()">All Combined Kana</button>
    <button class="button"mat-button ="!kyaButton" (click)="changeKyaButton()" >{{ kyaButton }} kya</button>
    <button class="button"mat-button [disabled]="!shaButton" >sha</button>
    <button class="button"mat-button [disabled]="!chaButton" >cha</button>
    <button class="button"mat-button [disabled]="!nyaButton" >nya</button>
    <button class="button"mat-button [disabled]="!hyaButton" >hya</button>
    <button class="button"mat-button [disabled]="!myaButton" >mya</button>
    <button class="button"mat-button [disabled]="!ryaButton" >rya</button>
    <button class="button"mat-button [disabled]="!gyaButton" >gya</button>
    <button class="button"mat-button [disabled]="!jaButton" >ja</button>
    <button class="button"mat-button [disabled]="!jaButton" >ja</button>
    <button class="button"mat-button [disabled]="!byaButton" >bya</button>
    <button class="button"mat-button [disabled]="!pyaButton" >pya</button>
  </section>

  <button mat-raised-button color="primary" style="margin-top: 10px;" (click)="activateAllKana()">Activate All</button>
  
</div>



<p>Read Local JSON file student data using typescript HttpClient</p>

  <table id="character">
    <tr>
        <th>katakana</th>
        <th>Romaji</th>
    </tr>
    <tr *ngFor="let character of objectKeys(id).slice(0, 103)">
      <td>{{ id[character].katakana }}</td>
      <td>{{ id[character].romaji }}</td>
    </tr>
  </table>





*/
