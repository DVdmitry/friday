import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BooksComponent} from "./pages/books.component";
import {EffectsModule} from "@ngrx/effects";
import {BooksEffects} from "./state/books.effects";

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([BooksEffects])],
  declarations: [BooksComponent],
  exports: [BooksComponent]
})

export class BooksModule {}
