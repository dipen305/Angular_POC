import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChildComponent } from './second-child.component';

describe('SecondChildComponent', () => {
  let component: SecondChildComponent;
  let fixture: ComponentFixture<SecondChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
