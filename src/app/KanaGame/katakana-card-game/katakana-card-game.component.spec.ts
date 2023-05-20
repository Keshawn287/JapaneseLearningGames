import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatakanaCardGameComponent } from './katakana-card-game.component';

describe('KatakanaCardGameComponent', () => {
  let component: KatakanaCardGameComponent;
  let fixture: ComponentFixture<KatakanaCardGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KatakanaCardGameComponent]
    });
    fixture = TestBed.createComponent(KatakanaCardGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
