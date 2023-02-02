import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentDirective } from './directives/parent.directive';
import { ChildDirective } from './directives/child.directive';
import {LoggerService} from "./logger.service";
import {PerformancePipe} from "./perfomance.pipe";
import {ChildComponent} from "./child-component/child.component";
import {CustomStyleDirective} from "./directives/custom-style.directive";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ParentDirective,
    ChildDirective,
    PerformancePipe,
    ChildComponent,
    CustomStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private logger: LoggerService) {
    this.logger.prefix = 'root'
    this.logger.log('constructor init')
  }
}
