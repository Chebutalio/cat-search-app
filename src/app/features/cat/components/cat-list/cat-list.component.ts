import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatCardComponent } from '../cat-card/cat-card.component';
import { Cat } from "../../../../interfaces/cat.model";

@Component({
  selector: 'app-cat-list',
  standalone: true,
  imports: [CommonModule, CatCardComponent],
  templateUrl: 'cat-list.component.html',
  styleUrl: 'cat-list.component.scss',
})
export class CatListComponent {
  @Input() cats: Cat[] = [];
}
