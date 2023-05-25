import { Component } from '@angular/core';

@Component({
  selector: 'app-hiragana-quiz',
  templateUrl: './hiragana-quiz.component.html',
  styleUrls: ['./hiragana-quiz.component.css']
})
export class HiraganaQuizComponent {

  
  gameData: any[] = [];
  answer = '';
  Totalscore = {
    correct: 0,
    wrong: 0
  };


  constructor(){
    this.parseLocalStorage();
  }

  parseLocalStorage(){
    var list = sessionStorage.getItem("listToLearn") || '';
    const pairs = list.trim().split(';');
    this.gameData = pairs.map(pair => {
      const [hiragana, romaji] = pair.trim().split(' ');
      return {hiragana, romaji, answer: '', score:{correct: 0, wrong: 0 } };
    });
    this.gameData.pop(); //deals with empty card at the end of the game
  }
 
  quizGrade(data: any){
    if(data.romaji.trim().toLowerCase() === data.answer.trim().toLowerCase()){
      data.score.correct++;
      this.Totalscore.correct++;
    }else{
      data.score.wrong++;
      this.Totalscore.wrong++;
    }
    data.answer = '';
   
    
   
  }
}
