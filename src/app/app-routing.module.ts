import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HiraganaKatakanaHomePageComponent } from './hiragana-katakana-home-page/hiragana-katakana-home-page.component';
import { HiraganaComponent } from './hiragana/hiragana.component';
import { KatakanaComponent } from './katakana/katakana.component';
import { CombinedComponent } from './combined/combined.component';


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
