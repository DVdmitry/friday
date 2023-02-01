import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TheoryService {
  theories = [{title: 'Quantum theory', userId: 1}, {title: 'Relativity theory', userId: 2}]

  constructor() { }
  getTheory(userId: number): string | undefined {
    return this.theories.find(t => t.userId === userId)?.title
  }
}
