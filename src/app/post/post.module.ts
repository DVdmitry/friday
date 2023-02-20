import {NgModule} from "@angular/core";
import {PostComponent} from "./pages/post.component";
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./state/post.reducer";
import {PostRoutingModule} from "./post-routing.module";
import {EffectsModule} from "@ngrx/effects";
import {PostEffects} from "./state/post.effects";
import {AdModule} from "../directives/ad.module";
import {DynamicComponentsModule} from "../dynamic-components/dynamic-components.module";

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, StoreModule.forFeature('posts', reducers), PostRoutingModule,
    EffectsModule.forFeature([PostEffects]), AdModule, DynamicComponentsModule],
  exports: [PostComponent]
})

export class PostModule {}
