import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPortfolioListComponent } from './admin-portfolio-list.component';

describe('AdminPortfolioListComponent', () => {
  let component: AdminPortfolioListComponent;
  let fixture: ComponentFixture<AdminPortfolioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPortfolioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPortfolioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
