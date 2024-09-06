import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'rxjs-custom-operator' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rxjs-custom-operator');
  });

  it('should multiply the numbers by a given factor', () => {
    const app = new AppComponent();
    const mockNumbers$ = of(1, 2, 3);
    const multiplyBy5 = app.multiplyBy(5);
    let output: number[] = [];
    const result$ = multiplyBy5(mockNumbers$);
    result$.subscribe((result) => {
      output = [...output, result];
    });
    expect(output).toEqual([5, 10, 15]);
  });
});
