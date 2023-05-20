import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HiraganaKatakanaHomePageComponent } from './KanaGame/hiragana-katakana-home-page/hiragana-katakana-home-page.component';
import { HiraganaComponent } from './KanaGame/hiragana/hiragana.component';
import { KatakanaComponent } from './KanaGame/katakana/katakana.component';
import { CombinedComponent } from './combined/combined.component';
import { HiraganaQuizComponent } from './KanaGame/hiragana-quiz/hiragana-quiz.component';
import { KatakanaQuizComponent } from './KanaGame/katakana-quiz/katakana-quiz.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'HiraganaKatakanaHome',
    component: HiraganaKatakanaHomePageComponent,
  },
  {
    path: 'Hiragana',
    component: HiraganaComponent,
  },
  {
    path: 'Katakana',
    component: KatakanaComponent,
  },
  {
    path: 'CombinedComponent',
    component: HiraganaKatakanaHomePageComponent,
  },
  {
    path: 'HiraganaQuiz',
    component: HiraganaQuizComponent,
  },
  {
    path: 'KatakanaQuiz',
    component: KatakanaQuizComponent,
  }

];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule

  ]
})
export class AppRoutingModule { }
