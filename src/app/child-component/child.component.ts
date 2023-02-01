import {Component, HostListener, Inject} from '@angular/core';
import {LoggerService} from "./logger.service";
import {ExperimentalLoggerService} from "./experimental-logger.service";
import {APP_CONFIG, AppConfig} from "./config.token";
import {UserService} from "./user.service";
import {TheoryService} from "./theory.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [{provide: LoggerService, useExisting: ExperimentalLoggerService}]
  // providers: [{provide: APP_CONFIG, useValue: appConfig}]
  providers: [{
    provide: LoggerService,
    useFactory: (appConfig: AppConfig) => appConfig.experimentalEnabled ? new ExperimentalLoggerService() : new LoggerService(),
    deps: [APP_CONFIG]
  }]
})
export class AppComponent {
  @HostListener('click') clicked() {
    console.log('clicked')
  }
  // constructor(private logger: LoggerService, private experimentalLogger: ExperimentalLoggerService, @Inject(APP_CONFIG) private config: AppConfig) {
  constructor(private logger: LoggerService, public userService: UserService, public theoryService: TheoryService) {
    this.logger.prefix = 'App component'
    // this.logger.log(`${this.logger.prefix} constructor init`)
    // console.log('isExperimental enabled: ', this.config.experimentalEnabled)
  }

  getTheory(userId: number): string {
    console.log(userId)
    return this.theoryService.getTheory(userId) ?? ''
  }
}
