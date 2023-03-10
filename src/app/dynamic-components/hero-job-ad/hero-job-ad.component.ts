import {Component, Input} from '@angular/core';
import {AdComponent} from "../../interface/ad-component.interface";

@Component({
  selector: 'app-hero-job-ad',
  templateUrl: './hero-job-ad.component.html',
  styleUrls: ['./hero-job-ad.component.scss']
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any
}
