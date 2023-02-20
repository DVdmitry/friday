import {NgModule} from "@angular/core";
import {HeroProfileComponent} from "./hero-profile/hero-profile.component";
import {HeroJobAdComponent} from "./hero-job-ad/hero-job-ad.component";
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import {AdModule} from "../directives/ad.module";

@NgModule({
  declarations: [HeroProfileComponent, HeroJobAdComponent, AdBannerComponent],
  imports: [AdModule],
  exports: [HeroProfileComponent, HeroJobAdComponent, AdBannerComponent]
})

export class DynamicComponentsModule {}
