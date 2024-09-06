import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, map, of, tap,from } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rxjs-custom-operator';

    valueBefore: number[] = []
    valueAfter: number[] = []

  // observable to generate random numbers
  numbers2$ = from(Array.from({ length: 10 }, () => Math.floor(Math.random() * 11)));

  ngOnInit() {
    this.numbers2$.pipe(this.multiplyBy(10)).subscribe((result) => {
      console.log(`value After: ${result}`);
      this.valueAfter = [...this.valueAfter, result];
    });
  }

  //  cusom operator to multiply the numbers by a given value
  multiplyBy(factor: number) {
    return (source$: Observable<number>) => {
      return source$.pipe(
        tap((value) => this.valueBefore = [...this.valueBefore, value]),
        map((value) => value * factor)
      );
    };
  }
}

