import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AdItem} from "../ad.item";
import {AdDirective} from "../../directives/ad.directive";
import {AdComponent} from "../../interface/ad-component.interface";

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit, OnDestroy {

  @Input() ads: AdItem[] = []

  currentAdIndex = -1
  interval: number | undefined

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadComponent()
    this.getAds()
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length
    const adItem = this.ads[this.currentAdIndex]

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear()

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component)
    const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactory)
    componentRef.instance.data = adItem.data
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent()
    }, 3000)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }
}
