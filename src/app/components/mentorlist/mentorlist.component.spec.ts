import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorListComponent } from './mentorlist.component';

describe('MentorlistComponent', () => {
  let component: MentorListComponent;
  let fixture: ComponentFixture<MentorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentorListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
