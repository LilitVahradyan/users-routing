import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {UserService} from './core/services/user.service';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }



