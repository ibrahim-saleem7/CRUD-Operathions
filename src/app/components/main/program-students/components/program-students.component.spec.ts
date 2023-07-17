import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramStudentsComponent } from './program-students.component';

describe('ProgramStudentsComponent', () => {
  let component: ProgramStudentsComponent;
  let fixture: ComponentFixture<ProgramStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramStudentsComponent]
    });
    fixture = TestBed.createComponent(ProgramStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
