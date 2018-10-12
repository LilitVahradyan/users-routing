import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserDataComponent } from './components/user-data/user-data.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UserListComponent, UserDataComponent],
  exports: [UserListComponent, UserDataComponent]
})
export class SharedModule { }



