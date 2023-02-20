import {Injectable} from "@angular/core";
import {AdItem} from "../dynamic-components/ad.item";
import {HeroProfileComponent} from "../dynamic-components/hero-profile/hero-profile.component";
import {HeroJobAdComponent} from "../dynamic-components/hero-job-ad/hero-job-ad.component";

@Injectable({
  providedIn: 'root'
})

export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: 'Batman', bio: 'Brave as they come'}),
      new AdItem(HeroProfileComponent, {name: 'Superman', bio: 'Smart as they come'}),
      new AdItem(HeroJobAdComponent,  { headline: 'Hiring for several positions', body: 'Submit your resume today!' }),
      new AdItem(HeroJobAdComponent,  { headline: 'Openings in all departments', body: 'Apply today' })
    ]
  }
}
