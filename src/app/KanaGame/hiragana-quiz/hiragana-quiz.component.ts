import { Component } from '@angular/core';

@Component({
  selector: 'app-hiragana-quiz',
  templateUrl: './hiragana-quiz.component.html',
  styleUrls: ['./hiragana-quiz.component.css']
})
export class HiraganaQuizComponent {

  gameData = [
    {hiragana: "Session Storage Failed To Load/Missing Session Storage", romaji: ""},

  ]
  card: any;
  answer = '';
  score = {
    correct: 0,
    wrong: 0
  };

  ngOnInit(){
    this.parseLocalStorage();
    this.gameCard();

  }

  parseLocalStorage(){
    var list = sessionStorage.getItem("listToLearn")!
    const pairs = list.trim().split(';');
    const result = pairs.map(pair => {
      const [hiragana, romaji] = pair.trim().split(' ');
      return {hiragana, romaji };
    });
    this.gameData = result
    return result;
  }
  gameCard(){
    if(this.gameData.length > 0){
      this.card = this.gameData.shift();
      this.answer = '';
    }else{
      this.card = null;
    }
  }
  quizGrade(){
    if(this.answer.trim().toLowerCase() === this.card.romaji.trim().toLowerCase()){
      this.score.correct++;
    }else{
      this.score.wrong++;
    }
    this.gameCard();
  }
}
