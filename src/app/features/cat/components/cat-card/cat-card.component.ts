import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cat-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgOptimizedImage],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.scss',
})
export class CatCardComponent {
  @Input() cat: any;
}
