import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  isLoading = new BehaviorSubject<boolean>(false);

  constructor() { }

  startLoading(): void {
    this.isLoading.next(true);
  }

  endLoading(): void {
    this.isLoading.next(false);
  }

  getLoading(): Observable<boolean> {
    return this.isLoading.asObservable();
  }




}
