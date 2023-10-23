import {
  afterNextRender,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AppLayoutService } from '../app-layout/app-layout.service';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatMenuModule],
  templateUrl: './page2.component.html',
})
export default class Page2Component {
  @ViewChild('menuExtraItems') menuExtraItems!: TemplateRef<any>;

  constructor(appLayoutService: AppLayoutService) {
    afterNextRender(() => {
      appLayoutService.extraMenuItems = this.menuExtraItems;
    });
  }

  onClickMenuItem() {
    alert('click menu item');
  }
}
