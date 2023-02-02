import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {LoggerService} from "./logger.service";
import {ExperimentalLoggerService} from "./experimental-logger.service";
import {APP_CONFIG, AppConfig} from "./config.token";
import {UserService} from "./user.service";
import {TheoryService} from "./theory.service";
import {
  AsyncSubject,
  BehaviorSubject,
  concat,
  fromEvent,
  interval,
  merge,
  Observable,
  of,
  ReplaySubject,
  Subject,
  timer
} from "rxjs";
import {concatMap, exhaustMap, filter, map, mergeMap, shareReplay, tap} from "rxjs/operators";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {fromPromise} from "rxjs/internal-compatibility";

interface IUser {
  userId?: number,
  id: number,
  title: string
  completed?: boolean
}

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
export class AppComponent implements OnInit, AfterViewInit {
  user1: Observable<IUser | undefined> | undefined
  user2: Observable<IUser | undefined> | undefined


  @HostListener('click') clicked() {
    // console.log('clicked')
  }

  @ViewChild('buttonEl') buttonEl: ElementRef | undefined
  // constructor(private logger: LoggerService, private experimentalLogger: ExperimentalLoggerService, @Inject(APP_CONFIG) private config: AppConfig) {
  constructor(private logger: LoggerService, public userService: UserService, public theoryService: TheoryService,
              private http: HttpClient) {
    this.logger.prefix = 'App component'
    // this.logger.log(`${this.logger.prefix} constructor init`)
    // console.log('isExperimental enabled: ', this.config.experimentalEnabled)
  }

  ngOnInit() {

    // const source1$ = of(1, 2, 3)
    // const source2$ = of(4, 5, 6)
    // const source3$ = of(7, 8, 9)
    // concat(source1$, source2$, source3$).subscribe(console.log)

    // interval(10).pipe(
    //   concatMap(val => this.http.get(`https://jsonplaceholder.typicode.com/todos/${val + 1}`))
    // ).subscribe(console.log)

    // interval(10).pipe(
    //   mergeMap(val => this.http.get(`https://jsonplaceholder.typicode.com/todos/${val + 1}`))
    // ).subscribe(console.log)

    // const int1$ = interval(1000)
    // const int$2 = int1$.pipe(
    //   map(val => val * 10)
    // )
    //
    // const res$ = merge(int1$, int$2).subscribe(console.log)

    // const https$: Observable<IUser[]> = new Observable<IUser[]>(observer => {
    //   fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(resp => resp.json())
    //     .then(data => {
    //       observer.next(data)
    //       observer.complete()
    //     })
    //     .catch(err => observer.error(err))
    // })
    //
    // const users$ = https$.pipe(
    //   tap(() => 'http req executed'),
    //   map((resp) => resp.map(user => ({id: user.id, title: user.title}))),
    //   shareReplay()
    // )
    //
    // this.user1 = users$.pipe(
    //   map(users => users.find(user => user.id === 1))
    // )
    //
    // this.user2 = users$.pipe(
    //   map(users => users.find(user => user.id === 2))
    // )
    // users$.subscribe(data => console.log(data), (err => console.log(err)), () => console.log('Completed'))

    // const subject$ = new Subject()
    // const subject$ = new BehaviorSubject(0)
    // const subject$ = new AsyncSubject()
    const subject$ = new ReplaySubject()
    const series$ = subject$.asObservable()

    series$.subscribe(val => console.log('early sub ' + val))

    subject$.next(1)
    subject$.next(2)
    subject$.next(3)
    subject$.complete()

    setTimeout(() => {
      series$.subscribe(val => console.log('late sub ' + val))
      subject$.next(4)
    }, 2000)

    const fromTimeStamp = () => {
      const time = new Date()
      return new Observable(observer => {
        observer.next(time)
        if (!time) {
          observer.error('some error')
        }
        observer.complete()
      })
    }

    const obs$ = fromTimeStamp()
    obs$.subscribe(console.log)
    setTimeout(() => obs$.subscribe(console.log), 3549)
  }

  ngAfterViewInit() {
    // fromEvent(this.buttonEl?.nativeElement, 'click').pipe(
    //   exhaustMap(val => this.http.get(`https://jsonplaceholder.typicode.com/todos/1`))
    // ).subscribe()
  }

  getTheory(userId: number): string {
    // console.log(userId)
    return this.theoryService.getTheory(userId) ?? ''
  }
}
