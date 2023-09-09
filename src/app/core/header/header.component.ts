import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { MatListModule } from "@angular/material/list";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatListModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
