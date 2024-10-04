import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { CatApiService } from '../services/cat-api.service';
import { Breed, Cat } from "../../../interfaces/cat.model";

export class LoadCats {
  static readonly type = '[Cat] Load Cats';
  constructor(public breedId: string = '', public limit: number = 10) {}
}

export class LoadBreeds {
  static readonly type = '[Cat] Load Breeds';
}

export interface CatStateModel {
  cats: Cat[];
  breeds: Breed[];
  limit: number;
  selectedBreed: string | null;
}

@State<CatStateModel>({
  name: 'cat',
  defaults: {
    cats: [],
    breeds: [],
    limit: 10,
    selectedBreed: null
  }
})

@Injectable()
export class CatState {
  constructor(private catApiService: CatApiService) {}

  @Selector()
  static getCats(state: CatStateModel) {
    return state.cats;
  }

  @Selector()
  static getBreeds(state: CatStateModel) {
    return state.breeds;
  }

  @Selector()
  static getLimit(state: CatStateModel) {
    return state.limit;
  }

  @Selector()
  static getSelectedBreed(state: CatStateModel) {
    return state.selectedBreed;
  }

  @Action(LoadCats)
  loadCats(ctx: StateContext<CatStateModel>, action: LoadCats) {
    const state = ctx.getState();
    return this.catApiService.getImages(action.breedId, action.limit).pipe(
      tap(cats => {
        ctx.patchState({
          cats
        });
      })
    );
  }

  @Action(LoadBreeds)
  loadBreeds(ctx: StateContext<CatStateModel>) {
    return this.catApiService.getBreeds().pipe(
      tap(breeds => {
        ctx.patchState({
          breeds
        });
      })
    );
  }
}
