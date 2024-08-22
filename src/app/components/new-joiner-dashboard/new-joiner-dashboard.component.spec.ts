import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJoinerDashboardComponent } from './new-joiner-dashboard.component';

describe('NewJoinerDashboardComponent', () => {
  let component: NewJoinerDashboardComponent;
  let fixture: ComponentFixture<NewJoinerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewJoinerDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewJoinerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
