import {isDevMode, NgModule} from '@angular/core';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToolbarModule} from "./toolbar/toolbar.module";
import {HomeModule} from "./home/home.module";
import {PostModule} from "./post/post.module";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import { BooksComponent } from './books/pages/books.component';
import {BooksModule} from "./books/books.module";

@NgModule({
  declarations: [
    AppComponent,
    ParentDirective,
    ChildDirective,
    PerformancePipe,
    ChildComponent,
    CustomStyleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToolbarModule,
    HomeModule,
    PostModule,
    BooksModule,
    EffectsModule.forRoot(),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
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
