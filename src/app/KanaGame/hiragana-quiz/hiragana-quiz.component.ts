import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-hiragana-quiz',
  templateUrl: './hiragana-quiz.component.html',
  styleUrls: ['./hiragana-quiz.component.css']
})
export class HiraganaQuizComponent {



  showScore: boolean = false;
  RightAnswerDisable: boolean = false;
  answerRequired: boolean = true;


  gameData: any[] = [];
  answer = '';
  Totalscore = {
    correct: 0,
    wrong: 0
  };


  constructor(private router: Router, private location: Location){
    this.parseLocalStorage();
  }
  reloadGame() {
    this.router.navigateByUrl('/HiraganaQuiz', { skipLocationChange: true }).then(() => {
      this.location.replaceState('/HiraganaQuiz');
      window.location.reload();
    });
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
    data.RightAnswerDisable = true;
    const unansweredCards = this.gameData.filter((card) => card.answer.trim() === '');
    data.answerRequired = unansweredCards.length > 0;
  }
  onSubmit(){
    // get percentages for the correct answers
    const totalAttempts = this.Totalscore.correct + this.Totalscore.wrong;
    const percentage = totalAttempts > 0 ? (this.Totalscore.correct / totalAttempts) * 100 : 0;

    //display what the user actually got right and wrong
    console.log('How did you do?:');
    this.gameData.forEach(data => {
      console.log(`${data.hiragana}: Correct - ${data.score.correct}, Wrong - ${data.score.wrong}`);
    });
    //display the score
    console.log('Total Score:');
    console.log(`Grade: ${percentage.toFixed(2)}%`);
    this.showScore = true;

  }
  
}
