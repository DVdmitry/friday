import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

type InputValue = 'text' | 'email'

type InputOnChange = (newVal: InputValue) => void

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}



type NumberTab = Tab<number>

const tabNum: NumberTab = {
  id: '22',
  position: 2,
  data: 1
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  form: FormGroup
  tuple: [string, boolean, number] = ['a', true, 1]

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.last([1, 2, 3])
    this.last(['a', 'b', 'c'])
    this.makeArr('a', 1)
    const v3 = this.makeArr<string | null>('a', 2)

    let a: any = 1
    a = 'hello'
    console.log(a)
  }

  saveForm() {
    console.log(this.form.value)
  }

  last<T>(arr: T[]): T[] {
    return [arr[arr.length - 1]]
  }

  makeArr<X, Y = number>(x: X, y: Y): [X, Y] {
    return [x, y]
  }

  makeFullName<T extends {firstName: string, lastName: string}>(obj: T) {
    return {
      ...obj,
      fullName: `${obj.firstName} ${obj.lastName}`
    }
  }



}
