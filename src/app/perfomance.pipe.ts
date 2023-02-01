import {Pipe, PipeTransform} from "@angular/core";
import {TheoryService} from "./theory.service";
import {Observable, of} from 'rxjs'

@Pipe({
  name: 'performancePipe'
})

export class PerformancePipe implements PipeTransform {
  constructor(private theoryService: TheoryService) {
  }
  transform(userId: number, prop: 'title' | 'userId'): Observable<string | number> | undefined  {
    const theory = this.theoryService.theories.find(t => t.userId === userId)
    if (theory) {
      return of(theory[prop])
    }
    return
  }
}
