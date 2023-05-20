import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatakanaQuizComponent } from './katakana-quiz.component';

describe('KatakanaQuizComponent', () => {
  let component: KatakanaQuizComponent;
  let fixture: ComponentFixture<KatakanaQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KatakanaQuizComponent]
    });
    fixture = TestBed.createComponent(KatakanaQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
