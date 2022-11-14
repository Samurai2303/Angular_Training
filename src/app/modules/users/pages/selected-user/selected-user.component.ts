import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.css']
})
export class SelectedUserComponent implements OnInit {

  user: IUser

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
        this.user = this.router.getCurrentNavigation()?.extras.state?.['user']
        if (!this.user) {
          this.usersService.getById(value?.['id']).subscribe(user => this.user = user);
        }
      }
    )
  }

  ngOnInit()
    :
    void {
  }

}
