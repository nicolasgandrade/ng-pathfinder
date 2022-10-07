import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = new AppComponent();
  });

  it('should have Ng Pathfinder as title', () => {
    expect(fixture.title).toEqual("Ng Pathfinder");
  });
});
