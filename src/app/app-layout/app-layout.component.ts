import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppBarComponent } from '../app-bar/app-bar.component';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    RouterLink,
    AppBarComponent,
    RouterOutlet,
  ],
})
export class AppLayoutComponent {}
