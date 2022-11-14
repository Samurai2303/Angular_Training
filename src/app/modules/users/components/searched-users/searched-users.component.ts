import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-searched-users',
  templateUrl: './searched-users.component.html',
  styleUrls: ['./searched-users.component.css']
})
export class SearchedUsersComponent implements OnInit {
  @Input()
  users: IUser[]

  constructor() {
  }

  ngOnInit(): void {
  }

}
