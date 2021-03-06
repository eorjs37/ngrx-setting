import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './page/user-info/user-info.component';


//ngrx
import { StoreModule } from '@ngrx/store';
import { userInfoReducer } from "@store/userInfo/userInfo.reducer"
//ngrx dev-tools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({userInfoState: userInfoReducer}),
    //dev-tools
    StoreDevtoolsModule.instrument({
      maxAge:25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
