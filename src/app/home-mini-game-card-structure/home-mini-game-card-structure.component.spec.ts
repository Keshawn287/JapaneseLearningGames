import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMiniGameCardStructureComponent } from './home-mini-game-card-structure.component';

describe('HomeMiniGameCardStructureComponent', () => {
  let component: HomeMiniGameCardStructureComponent;
  let fixture: ComponentFixture<HomeMiniGameCardStructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeMiniGameCardStructureComponent]
    });
    fixture = TestBed.createComponent(HomeMiniGameCardStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
