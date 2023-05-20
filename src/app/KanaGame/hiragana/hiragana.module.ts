import { MatButtonModule } from "@angular/material/button";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NgModule } from '@angular/core';
import { NgModel } from "@angular/forms";

const MaterialComponents = [
    MatButtonModule,
    MatButtonToggleModule
  ];

  @NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents]
  })
  export class HiraganaModule { }
  