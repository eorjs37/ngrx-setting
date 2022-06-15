import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './page/user-info/user-info.component';


//ngrx
import { StoreModule } from '@ngrx/store';
import { userInfoReducer } from "@store/userInfo/userInfo.reducer"

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({userInfoState: userInfoReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
