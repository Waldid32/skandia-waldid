// menu.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuOpenSubject = new BehaviorSubject<boolean>(true);
  menuOpen$ = this.menuOpenSubject.asObservable();

  toggleMenu() {
    this.menuOpenSubject.next(!this.menuOpenSubject.value);
  }

  setMenuState(state: boolean) {
    this.menuOpenSubject.next(state);
  }
}
