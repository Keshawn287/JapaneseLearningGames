import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiraganaKatakanaHomePageComponent } from './hiragana-katakana-home-page.component';

describe('HiraganaKatakanaHomePageComponent', () => {
  let component: HiraganaKatakanaHomePageComponent;
  let fixture: ComponentFixture<HiraganaKatakanaHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiraganaKatakanaHomePageComponent]
    });
    fixture = TestBed.createComponent(HiraganaKatakanaHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
