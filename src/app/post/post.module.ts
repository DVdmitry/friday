import {NgModule} from "@angular/core";
import {PostComponent} from "./pages/post.component";
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./state/post.reducer";
import {PostRoutingModule} from "./post-routing.module";
import {EffectsModule} from "@ngrx/effects";
import {PostEffects} from "./state/post.effects";

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, StoreModule.forFeature('posts', reducers), PostRoutingModule, EffectsModule.forFeature([PostEffects])],
  exports: [PostComponent]
})

export class PostModule {}
