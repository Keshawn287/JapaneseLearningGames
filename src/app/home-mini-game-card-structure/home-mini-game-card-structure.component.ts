import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-mini-game-card-structure',
  templateUrl: './home-mini-game-card-structure.component.html',
  styleUrls: ['./home-mini-game-card-structure.component.css']
})
export class HomeMiniGameCardStructureComponent {
  @Input() gameNameTitle!: string;
  @Input() gameFrontCardTitle!: string;
  @Input() gameImage!: string;
  @Input() gameDescription!: string;
  @Input() gameRoutePath!: string;
  isFlipped: boolean = false;
  frontText: string = "default Front Text"
  backTest: string = "default Back Text"

  flipCard(){
    this.isFlipped = !this.isFlipped;
  }
  constructor(private router: Router) {}

  onCardClick() {
    if (this.gameRoutePath) {
      this.router.navigate([this.gameRoutePath]);
    }
  }


}
