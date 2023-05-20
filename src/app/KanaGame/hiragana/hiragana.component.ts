import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { KanaServiceService } from "src/app/services/kana-service.service";
import { Router } from "@angular/router";




@Component({
  selector: "app-hiragana",
  templateUrl: "./hiragana.component.html",
  styleUrls: ["./hiragana.component.scss"],

})
export class HiraganaComponent {
  startEnabled: boolean = false;
  hiragana: any;
  hiraganaCategories: any[] = [];
  learnLearningList: any[] = [];

  hiragana_a:any
  hiragana_ka:any
  hiragana_sa:any
  hiragana_ta:any
  hiragana_na:any
  hiragana_ha:any
  hiragana_ma:any
  hiragana_ra:any
  hiragana_ya:any
  hiragana_ga:any
  hiragana_da:any
  hiragana_za:any
  hiragana_ba:any
  hiragana_pa:any
  hiragana_kya:any
  hiragana_sha:any
  hiragana_cha:any
  hiragana_nya:any
  hiragana_hya:any
  hiragana_mya:any
  hiragana_rya:any
  hiragana_gya:any
  hiragana_ja:any
  hiragana_dya:any
  hiragana_bya:any
  hiragana_pya:any
  

  constructor(
    private kanaServiceService: KanaServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initGetHiragana().then((value) => {
      this.createCategories();
    });
  }

  
  initGetHiragana(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.kanaServiceService.getKanaData().subscribe(
        (hiraganaItems) => {
          console.log("Got hiragana characters");
          this.hiragana = hiraganaItems;
          resolve(hiraganaItems);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  createCategories() {
    this.hiragana_a = this.hiragana.a
    this.hiragana_ka = this.hiragana.ka
    this.hiragana_sa = this.hiragana.sa
    this.hiragana_ta = this.hiragana.ta
    this.hiragana_na = this.hiragana.na
    this.hiragana_ha = this.hiragana.ha
    this.hiragana_ma = this.hiragana.ma
    this.hiragana_ra = this.hiragana.ra
    this.hiragana_ya = this.hiragana.ya
    this.hiragana_ga = this.hiragana.ga
    this.hiragana_da = this.hiragana.da
    this.hiragana_za = this.hiragana.za
    this.hiragana_ba = this.hiragana.ba
    this.hiragana_pa = this.hiragana.pa
    this.hiragana_kya = this.hiragana.kya
    this.hiragana_sha = this.hiragana.sha
    this.hiragana_cha = this.hiragana.cha
    this.hiragana_nya = this.hiragana.nya
    this.hiragana_hya = this.hiragana.hya
    this.hiragana_mya = this.hiragana.mya
    this.hiragana_rya = this.hiragana.rya
    this.hiragana_gya = this.hiragana.gya
    this.hiragana_ja = this.hiragana.ja
    this.hiragana_dya = this.hiragana.dya
    this.hiragana_bya = this.hiragana.bya
    this.hiragana_pya = this.hiragana.pya
  }
  startLearning(){
    this.setLocalStorage();
    this.router.navigate(['/HiraganaQuiz']);
  }

  adjustLearningList(input: any){
    input.forEach((character: { hiragana: any; romaji: any}) => {
      const index = this.learnLearningList.findIndex(
        (item) => 
          item.hiragana === character.hiragana && item.romaji === character.romaji
      );
      if (index != -1){
        this.learnLearningList.splice(index, 1);
      } else {
        this.learnLearningList.push(character);
      }
    });

    this.checkIfStartLearningButtonNeedsToBeEnabled();
  }
  checkIfStartLearningButtonNeedsToBeEnabled(){
    this.startEnabled = this.learnLearningList.length > 0;
  }
  setLocalStorage(){
    var adjustListAsString = '';
    this.learnLearningList.forEach((letter) => {
      adjustListAsString +=
        letter.hiragana + " " + letter.romaji + " ; ";

    });
    sessionStorage.setItem('listToLearn', adjustListAsString);
  }
}
/*

constructor(private kanaService: KanaServiceService) {}

  startLearningEnabled: boolean = false;
  hiragana: any;
  romaji: any;
  hiragana_1: any;
  hiragana_2: any;
  hiragana_3: any;
  hiragana_4: any;
  hiragana_5: any;
  hiragana_6: any;
  hiragana_7: any;
  hiragana_8: any;
  hiragana_9: any;
  hiragana_10: any;
  romaji_1: any;
  romaji_2: any;
  romaji_3: any;
  romaji_4: any;
  romaji_5: any;
  romaji_6: any;
  romaji_7: any;
  romaji_8: any;
  romaji_9: any;
  romaji_10: any;
  hiraganaArrays: string[] = [];
  romajiArrays: string[] = [];
  combinedArray: { hiragana: string; romaji: string }[] = [];
  gameStarted: boolean = false;
  currentCardIndex: number = 0;
  currentCard: { hiragana: string; romaji: string } = {
    hiragana: "",
    romaji: "",
  };
  userInput: string = "";
  score: number = 0;

  ngOnInit() {
    this.initGetHiragana().then((value) => {
      this.createArrays();
    });
  }

  initGetHiragana(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.kanaService.getKanaData().subscribe(
        (hiraganasChars) => {
          console.log("Got hiragana characters");
          this.hiragana = hiraganasChars;
          resolve(hiraganasChars);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  filterKanaAndRomajiList() {}
  createArrays() {
    this.hiragana_1 = this.hiragana[0][1].hiragana;
    this.hiragana_2 = this.hiragana[1][1].hiragana;
    this.hiragana_3 = this.hiragana[2][1].hiragana;
    this.hiragana_4 = this.hiragana[3][1].hiragana;
    this.hiragana_5 = this.hiragana[4][1].hiragana;
    this.hiragana_6 = this.hiragana[5][1].hiragana;
    this.hiragana_7 = this.hiragana[6][1].hiragana;
    this.hiragana_8 = this.hiragana[7][1].hiragana;
    this.hiragana_9 = this.hiragana[8][1].hiragana;
    this.hiragana_10 = this.hiragana[9][1].hiragana;
    this.romaji_1 = this.hiragana[0][1].romaji;
    this.romaji_2 = this.hiragana[1][1].romaji;
    this.romaji_3 = this.hiragana[2][1].romaji;
    this.romaji_4 = this.hiragana[3][1].romaji;
    this.romaji_5 = this.hiragana[4][1].romaji;
    this.romaji_6 = this.hiragana[5][1].romaji;
    this.romaji_7 = this.hiragana[6][1].romaji;
    this.romaji_8 = this.hiragana[7][1].romaji;
    this.romaji_9 = this.hiragana[8][1].romaji;
    this.romaji_10 = this.hiragana[9][1].romaji;

    //const hiraganaItem = [this.hiragana_1, this.hiragana_2, this.hiragana_3, this.hiragana_4, this.hiragana_5, this.hiragana_6, this.hiragana_7, this.hiragana_8, this.hiragana_9, this.hiragana_10];
    //const romajiItem = [this.romaji_1, this.romaji_2, this.romaji_3, this.romaji_4, this.romaji_5, this.romaji_6, this.romaji_7, this.romaji_8, this.romaji_9, this.romaji_10];

    //for (let i = 0; i < hiraganaItem.length; i++) {
    for (let i = 0; i < this.hiragana.length; i++) {
      const hiraganaArray = this.hiragana[i][1].hiragana;
      const romajiArray = this.hiragana[i][1].romaji;
      //const hiraganaArray = hiraganaItem[i];
      //const romajiArray = romajiItem[i];
      if (hiraganaArray.length === romajiArray.length) {
        for (let j = 0; j < hiraganaArray.length; j++) {
          this.hiraganaArrays.push(hiraganaArray[j]);
          this.romajiArrays.push(romajiArray[j]);
        }
      }
    }
  }
  startQuiz() {
    this.combinedArray = this.combineArrays(
      this.hiraganaArrays,
      this.romajiArrays
    );
    this.shuffleArray(this.combinedArray);
    this.gameStarted = true;
    this.currentCardIndex = 0;
    this.score = 0;
    this.showNextCard();
  }
  showNextCard() {
    if (this.currentCardIndex < this.combinedArray.length) {
      this.currentCard = this.combinedArray[this.currentCardIndex];
      this.userInput = "";
    } else {
      this.gameStarted = false;
    }
  }
  submitAnswer() {
    if (
      this.userInput.toLocaleLowerCase() ===
      this.currentCard.romaji.toLocaleLowerCase()
    ) {
      this.score++;
    }
    this.currentCardIndex++;
    this.showNextCard();
  }
  combineArrays(
    hiraganaArrays: string[],
    romajiArrays: string[]
  ): { hiragana: string; romaji: string }[] {
    const combinedArray: { hiragana: string; romaji: string }[] = [];
    for (let i = 0; i < hiraganaArrays.length; i++) {
      const hiraganaArray = hiraganaArrays[i];
      const romajiArray = romajiArrays[i];
      if (hiraganaArray.length === romajiArray.length) {
        for (let j = 0; j < hiraganaArray.length; j++) {
          combinedArray.push({
            hiragana: hiraganaArray[j],
            romaji: romajiArray[j],
          });
        }
      }
    }
    return combinedArray;
  }
  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }



combineArrays(hiraganaArrays: string[], romajiArrays: string[]): { hiragana: string, romaji: string }[] {
    const combinedArray: { hiragana: string, romaji: string }[] = [];
    for (let i = 0; i < this.hiraganaArrays.length; i++) {
      const hiraganaArray = this.hiraganaArrays[i];
      const romajiArray = this.romajiArrays[i];
      if (hiraganaArray.length === romajiArray.length) {
        for (let j = 0; j < hiraganaArray.length; j++) {
          combinedArray.push({ hiragana: hiraganaArray[j], romaji: romajiArray[j] });
          
        }
        return combinedArray;
      }
      

 startQuiz(){
      this.cards = [];
      this.score = 0;
      this.showScore = false;
      const activateHiraganas = Object.keys(this.hiraganaData).filter(
        (hiragana) => this.activateRomajis.includes(this.hiraganaData[hiragana] as never)
      );
      
      for (let i = 0; i < this.activateRomajis.length; i++){
        const romaji = this.activateRomajis[i];
        const hiragana1 = activateHiraganas.filter(
          (hiragana) => this.hiraganaData[hiragana] === romaji
        );
        const randomHiragana = hiragana1[Math.floor(Math.random() * hiragana1.length)];
        this.cards.push as never;({
          hiragana: randomHiragana,
          romaji: romaji,
          answered: false,
          isCorrect: null,
          attempts: 0,
        });
        
      }
      this.showQuiz = true; // Show the quiz section
    }
    submitQuiz(){
      let correct = 0;
      let pickedCards = this.cards.length;
      for (let i = 0; i < pickedCards; i++){
        const card = this.cards[i];
        if (card.answered){
          if(card.isCorrect){
            correct++;
          }
        } else {
          pickedCards--;
        }
      }
      this.score = Math.round((correct/pickedCards)*100);
      this.showScore = true;
    }
    onCardAnswered(cardIndex: number, answer: string){
      const card =this.cards[cardIndex];
      const isCorrect = this.hiraganaData[card.hiragana] == answer;
      card.answered = true;
      card.isCorrect = isCorrect;
      card.attempts++;
    }
    onRomajiToggle(romaji: string, activated: boolean) {
      if (activated) {
        this.activateRomajis.push as never;(romaji);
      } else {
        const index = this.activateRomajis.indexOf as never;(romaji);
        if (index !== -1) {
          this.activateRomajis.splice(index, 1);
        }
      }
    }


















import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface StringMap {
  [key: string]: string;
}


@Component({
  selector: 'app-hiragana',
  templateUrl: './hiragana.component.html',
  styleUrls: ['./hiragana.component.css']
})
export class HiraganaComponent implements OnInit{
  id:any;
  url: string = '/assets/hiragana-katakana.json';
 
 
  

  

    constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[][]>(this.url).subscribe(res => {
      this.id = res.reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});
    });
  }
  objectKeys(obj: StringMap) {
    return Object.keys(obj);
  }
  
}
hiragana_1:any
  hiragana_2:any
  hiragana_3:any
  hiragana_4:any
  hiragana_5:any
  hiragana_6:any
  hiragana_7:any
  hiragana_8:any
  hiragana_9:any
  hiragana_10:any
  hiragana_11:any
  hiragana_12:any
  hiragana_13:any
  hiragana_14:any
  hiragana_15:any
  hiragana_16:any
  hiragana_17:any
  hiragana_18:any
  hiragana_19:any
  hiragana_20:any
  hiragana_21:any
  hiragana_22:any
  hiragana_23:any
  hiragana_24:any
  hiragana_25:any
  hiragana_26:any
  hiragana_27:any
  hiragana_28:any
  hiragana_29:any
  hiragana_30:any
  hiragana_31:any
  hiragana_32:any
  hiragana_33:any
  hiragana_34:any
  hiragana_35:any
  hiragana_36:any
  hiragana_37:any
  hiragana_38:any
  hiragana_39:any
  hiragana_40:any
  hiragana_41:any
  hiragana_42:any
  hiragana_43:any
  hiragana_44:any
  hiragana_45:any
  hiragana_46:any
  hiragana_47:any
  hiragana_48:any
  hiragana_49:any
  hiragana_50:any
  hiragana_51:any
  hiragana_52:any
  hiragana_53:any
  hiragana_54:any
  hiragana_55:any
  hiragana_56:any
  hiragana_57:any
  hiragana_58:any
  hiragana_59:any
  hiragana_60:any
  hiragana_1A:any
  hiragana_1B:any
  hiragana_1C:any
  hiragana_2A:any
  hiragana_2B:any
  hiragana_2C:any
  hiragana_3A:any
  hiragana_3B:any
  hiragana_3C:any
  hiragana_4A:any
  hiragana_4B:any
  hiragana_4C:any
  hiragana_5A:any
  hiragana_5B:any
  hiragana_5C:any
  hiragana_6A:any
  hiragana_6B:any
  hiragana_6C:any
  hiragana_7A:any
  hiragana_7B:any
  hiragana_7C:any
  hiragana_8A:any
  hiragana_8B:any
  hiragana_8C:any
  hiragana_9A:any
  hiragana_9B:any
  hiragana_9C:any
  hiragana_10A:any
  hiragana_10B:any
  hiragana_10C:any
  hiragana_11A:any
  hiragana_11B:any
  hiragana_11C:any
  hiragana_12A:any
  hiragana_12B:any
  hiragana_12C:any
  hiragana_A:any
  hiragana_B:any
  hiragana_C:any
  hiragana_D:any
  hiragana_E:any
  hiragana_F:any

  romaji_1:any
  romaji_2:any
  romaji_3:any
  romaji_4:any
  romaji_5:any
  romaji_6:any
  romaji_7:any
  romaji_8:any
  romaji_9:any
  romaji_10:any
  romaji_11:any
  romaji_12:any
  romaji_13:any
  romaji_14:any
  romaji_15:any
  romaji_16:any
  romaji_17:any
  romaji_18:any
  romaji_19:any
  romaji_20:any
  romaji_21:any
  romaji_22:any
  romaji_23:any
  romaji_24:any
  romaji_25:any
  romaji_26:any
  romaji_27:any
  romaji_28:any
  romaji_29:any
  romaji_30:any
  romaji_31:any
  romaji_32:any
  romaji_33:any
  romaji_34:any
  romaji_35:any
  romaji_36:any
  romaji_37:any
  romaji_38:any
  romaji_39:any
  romaji_40:any
  romaji_41:any
  romaji_42:any
  romaji_43:any
  romaji_44:any
  romaji_45:any
  romaji_46:any
  romaji_47:any
  romaji_48:any
  romaji_49:any
  romaji_50:any
  romaji_51:any
  romaji_52:any
  romaji_53:any
  romaji_54:any
  romaji_55:any
  romaji_56:any
  romaji_57:any
  romaji_58:any
  romaji_59:any
  romaji_60:any
  romaji_1A:any
  romaji_1B:any
  romaji_1C:any
  romaji_2A:any
  romaji_2B:any
  romaji_2C:any
  romaji_3A:any
  romaji_3B:any
  romaji_3C:any
  romaji_4A:any
  romaji_4B:any
  romaji_4C:any
  romaji_5A:any
  romaji_5B:any
  romaji_5C:any
  romaji_6A:any
  romaji_6B:any
  romaji_6C:any
  romaji_7A:any
  romaji_7B:any
  romaji_7C:any
  romaji_8A:any
  romaji_8B:any
  romaji_8C:any
  romaji_9A:any
  romaji_9B:any
  romaji_9C:any
  romaji_10A:any
  romaji_10B:any
  romaji_10C:any
  romaji_11A:any
  romaji_11B:any
  romaji_11C:any
  romaji_12A:any
  romaji_12B:any
  romaji_12C:any
  romaji_A:any
  romaji_B:any
  romaji_C:any
  romaji_D:any
  romaji_E:any
  romaji_F:any





*/
