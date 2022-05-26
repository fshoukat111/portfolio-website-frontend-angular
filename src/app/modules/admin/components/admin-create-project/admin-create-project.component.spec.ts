import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateProjectComponent } from './admin-create-project.component';

describe('v', () => {
  let component: AdminCreateProjectComponent;
  let fixture: ComponentFixture<AdminCreateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
