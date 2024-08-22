import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewjoinerlistComponent } from './newjoinerlist.component';

describe('NewjoinerlistComponent', () => {
  let component: NewjoinerlistComponent;
  let fixture: ComponentFixture<NewjoinerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewjoinerlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewjoinerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
