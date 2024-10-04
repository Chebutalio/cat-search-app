import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

import { LoadCats, LoadBreeds, CatState } from '../../store/cat.state';
import { CatListComponent } from '../cat-list/cat-list.component';
import { Breed, Cat } from "../../../../interfaces/cat.model";

@Component({
  selector: 'app-cat-search',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    CatListComponent,
    MatInputModule,
  ],
  templateUrl: './cat-search.component.html',
  styleUrl: './cat-search.component.css',
})
export class CatSearchComponent implements OnInit {
  public form: FormGroup;
  public cats$: Observable<Cat[]>;
  public breeds$: Observable<Breed[]>;

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = this.fb.group({
      breed: [''],
      limit: [10]
    });

    this.breeds$ = this.store.select(CatState.getBreeds);
    this.cats$ = this.store.select(CatState.getCats);
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadBreeds());
  }

  public onSubmit(): void {
    const { breed, limit } = this.form.value;
    this.store.dispatch(new LoadCats(breed, limit));
  }
}
