import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiraganaQuizComponent } from './hiragana-quiz.component';

describe('HiraganaQuizComponent', () => {
  let component: HiraganaQuizComponent;
  let fixture: ComponentFixture<HiraganaQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiraganaQuizComponent]
    });
    fixture = TestBed.createComponent(HiraganaQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
