import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFlower2Component } from './single-flower-2.component';

describe('SingleFlower2Component', () => {
  let component: SingleFlower2Component;
  let fixture: ComponentFixture<SingleFlower2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleFlower2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleFlower2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
