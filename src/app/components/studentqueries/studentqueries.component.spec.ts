import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQueriesComponent } from './studentqueries.component';

describe('StudentqueriesComponent', () => {
  let component: StudentQueriesComponent;
  let fixture: ComponentFixture<StudentQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentQueriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
