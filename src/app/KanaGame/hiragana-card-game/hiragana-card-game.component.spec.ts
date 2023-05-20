import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiraganaCardGameComponent } from './hiragana-card-game.component';

describe('HiraganaCardGameComponent', () => {
  let component: HiraganaCardGameComponent;
  let fixture: ComponentFixture<HiraganaCardGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiraganaCardGameComponent]
    });
    fixture = TestBed.createComponent(HiraganaCardGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
