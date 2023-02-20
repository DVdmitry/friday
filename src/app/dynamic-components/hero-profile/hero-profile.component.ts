import {Component, Input} from '@angular/core';
import {AdComponent} from "../../interface/ad-component.interface";

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss']
})
export class HeroProfileComponent implements AdComponent {

  @Input() data: any;

}
