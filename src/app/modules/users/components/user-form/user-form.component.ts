import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UsersService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user = {id: null, name: null}

  @Output()
  searchedUsers = new EventEmitter<IUser[]>();

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
  }

  search(form: NgForm) {
    this.usersService.getAll().subscribe((value) => {
      this.searchedUsers.emit(value)



    })
  }
}
