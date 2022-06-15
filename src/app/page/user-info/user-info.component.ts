import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserInfoState } from "@store/state/userInfoState"
import { Observable } from 'rxjs';
import { getUserInfo } from "@store/userInfo/useInfo.selectors";
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  userInfoState$!: Observable<UserInfoState>;
  constructor(private store:Store<{userInfoState:UserInfoState}>) { }

  ngOnInit(): void {
    console.log(this.store);
    this.userInfoState$ = this.store.select(getUserInfo);
  }

}
