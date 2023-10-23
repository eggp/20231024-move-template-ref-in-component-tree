import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutService } from '../app-layout/app-layout.service';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page1.component.html',
})
export default class Page1Component implements OnInit {
  @ViewChild('appBar', { static: true }) appBar!: TemplateRef<any>;
  showAppBarPlugin = true;
  #appLayoutService: AppLayoutService;

  constructor(appLayoutService: AppLayoutService) {
    this.#appLayoutService = appLayoutService;
  }

  ngOnInit() {
    this.#appLayoutService.appBarWidget = this.appBar ?? null;
  }
}
