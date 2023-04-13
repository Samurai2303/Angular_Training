import { Component, OnInit } from '@angular/core';
import {LoadService} from "../../services";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  isLoading: boolean;

  constructor(private loadService:LoadService, private router:Router) { }

  ngOnInit(): void {
    this.loadService.getLoading().subscribe(value => this.isLoading = value);
    this.router.events.subscribe(value => {
      if (value instanceof NavigationStart) {
        this.loadService.startLoading();
      } else if (value instanceof NavigationEnd) {
        this.loadService.endLoading();
      }
    })
  }

}
