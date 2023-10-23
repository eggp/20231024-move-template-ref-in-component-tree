import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';

export type TplRef = TemplateRef<unknown> | null;

@Injectable({
  providedIn: 'root',
})
export class AppLayoutService {
  #appBarWidget$ = new BehaviorSubject<TplRef>(null);
  #extraMenuItems$ = new BehaviorSubject<TplRef>(null);

  constructor(router: Router) {
    router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => {
        this.#appBarWidget$.next(null);
        this.#extraMenuItems$.next(null);
      });
  }

  set appBarWidget(cmpDef: TplRef) {
    this.#appBarWidget$.next(cmpDef);
  }

  get appBarWidget$() {
    return this.#appBarWidget$.asObservable();
  }

  set extraMenuItems(menuItemsDefs: TplRef) {
    this.#extraMenuItems$.next(menuItemsDefs);
  }

  get extraMenuItems$() {
    return this.#extraMenuItems$.asObservable();
  }
}
