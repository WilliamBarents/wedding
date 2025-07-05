import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFlowerComponent } from './single-flower.component';

describe('SingleFlowerComponent', () => {
  let component: SingleFlowerComponent;
  let fixture: ComponentFixture<SingleFlowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleFlowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
