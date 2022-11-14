import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  searchedUsers:IUser[]

  constructor() {
  }

  ngOnInit(): void {
  }

  searchUsers(users: IUser[]) {
    this.searchedUsers = users;
  }
}
