import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  href = location.href;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(() => this.href = location.href)
  }

  home():void {
    this.router.navigate(['films']);
  }

  userInfo():void {
    this.router.navigate(['userInfo'])
  }

  favorites():void {
 this.router.navigate(['favorites'])
  }
}
