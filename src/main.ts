import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from "@angular/core";
import { RouterModule } from "@angular/router";

import { provideStore } from '@ngxs/store';
import { CatState } from './app/features/cat/store/cat.state';
import { AppComponent } from "./app/app.component";
import { CatSearchComponent } from "./app/features/cat/components/cat-search/cat-search.component";

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideStore([CatState]),
    importProvidersFrom(
      BrowserAnimationsModule,
      RouterModule.forRoot([
        { path: '', component: CatSearchComponent }
      ])
    )
  ]
})
  .catch(err => console.error(err));
