import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrideGroomComponent } from './bride-groom.component';

describe('BrideGroomComponent', () => {
  let component: BrideGroomComponent;
  let fixture: ComponentFixture<BrideGroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrideGroomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrideGroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
