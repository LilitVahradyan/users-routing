import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCardComponent } from './components/user-card/user-card.component';
import { UserImgDirective } from './directives/images/user-img.directive';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserImgDirective, HeaderComponent, UserCardComponent],
  exports: [UserCardComponent, HeaderComponent]
})
export class SharedModule { }
