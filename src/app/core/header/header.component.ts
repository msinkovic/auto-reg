import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { MatListModule } from "@angular/material/list";
import { RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatListModule,
    RouterLink,
    MatButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
