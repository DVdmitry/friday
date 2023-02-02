import {AfterContentInit, Component, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements AfterContentInit {
  @ContentChild('contentChild1') contentChild1: ElementRef | undefined
  ngAfterContentInit() {
    // console.log('this.contentChild1', this.contentChild1)
  }
}
