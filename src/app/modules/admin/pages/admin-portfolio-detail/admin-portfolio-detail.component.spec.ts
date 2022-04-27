import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortfolioDetailComponent } from './admin-portfolio-detail.component';

describe('AdminPortfolioDetailComponent', () => {
  let component: AdminPortfolioDetailComponent;
  let fixture: ComponentFixture<AdminPortfolioDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPortfolioDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPortfolioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
