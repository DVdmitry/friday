import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BooksComponent} from "./pages/books.component";
import {EffectsModule} from "@ngrx/effects";
import {BooksEffects} from "./state/books.effects";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./state/books.reducer";

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([BooksEffects]), StoreModule.forFeature('books', reducer)],
  declarations: [BooksComponent],
  exports: [BooksComponent]
})

export class BooksModule {}
