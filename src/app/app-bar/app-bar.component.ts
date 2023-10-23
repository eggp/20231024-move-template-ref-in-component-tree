import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppLayoutService, TplDef } from '../app-layout/app-layout.service';

@Component({
  selector: 'app-app-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  templateUrl: './app-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBarComponent {
  appBarWidget: TplDef = null;
  extraMenuItems: TplDef = null;

  constructor(appLayoutService: AppLayoutService, cdr: ChangeDetectorRef) {
    appLayoutService.appBarWidget$.subscribe((appBarWidget) => {
      this.appBarWidget = appBarWidget;
      cdr.markForCheck();
    });
    appLayoutService.extraMenuItems$.subscribe((extraMenuItems) => {
      this.extraMenuItems = extraMenuItems;
      cdr.markForCheck();
    });
  }
}
