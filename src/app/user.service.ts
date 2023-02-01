import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly users = [{name: 'Jim', userId: 1}, {name: 'Bill', userId: 2}]

  constructor() { }


}
