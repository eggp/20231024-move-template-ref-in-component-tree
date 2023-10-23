import { Injectable, NgZone, TemplateRef, Type } from '@angular/core';
import { BehaviorSubject, filter, take } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';

export type TplDef = TemplateRef<unknown> | null;

@Injectable({
  providedIn: 'root',
})
export class AppLayoutService {
  #appBarWidget$ = new BehaviorSubject<TplDef>(null);
  #extraMenuItems$ = new BehaviorSubject<TplDef>(null);

  constructor(router: Router) {
    router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => {
        this.#appBarWidget$.next(null);
        this.#extraMenuItems$.next(null);
      });
  }

  set appBarWidget(cmpDef: TplDef) {
    this.#appBarWidget$.next(cmpDef);
  }

  get appBarWidget$() {
    return this.#appBarWidget$.asObservable();
  }

  set extraMenuItems(menuItemsDefs: TplDef) {
    this.#extraMenuItems$.next(menuItemsDefs);
  }

  get extraMenuItems$() {
    return this.#extraMenuItems$.asObservable();
  }
}
