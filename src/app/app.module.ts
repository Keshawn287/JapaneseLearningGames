import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeMiniGameCardStructureComponent } from './home-mini-game-card-structure/home-mini-game-card-structure.component';
import { HiraganaKatakanaHomePageComponent } from './KanaGame/hiragana-katakana-home-page/hiragana-katakana-home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HiraganaComponent } from './KanaGame/hiragana/hiragana.component';
import { KatakanaComponent } from './KanaGame/katakana/katakana.component';
import { CombinedComponent } from './combined/combined.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { HiraganaCardGameComponent } from './KanaGame/hiragana-card-game/hiragana-card-game.component';
import { KatakanaCardGameComponent } from './KanaGame/katakana-card-game/katakana-card-game.component';
import { KatakanaQuizComponent } from './KanaGame/katakana-quiz/katakana-quiz.component';
import { HiraganaQuizComponent } from './KanaGame/hiragana-quiz/hiragana-quiz.component';
import {MatTableModule} from '@angular/material/table';
import { EnterTabDirective } from './enter-tab.directive';
import { EnableControlDirective } from './enable-control.directive';




@NgModule({
  declarations: [
    AppComponent,
    HomeMiniGameCardStructureComponent,
    HiraganaKatakanaHomePageComponent,
    HomeComponent,
    HiraganaComponent,
    KatakanaComponent,
    CombinedComponent,
    HiraganaCardGameComponent,
    KatakanaCardGameComponent,
    KatakanaQuizComponent,
    HiraganaQuizComponent,
    EnterTabDirective,
    EnableControlDirective,
   
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
