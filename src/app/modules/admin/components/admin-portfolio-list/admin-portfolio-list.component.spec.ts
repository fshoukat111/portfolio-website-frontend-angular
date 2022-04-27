import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream:src/app/modules/admin/components/admin-sidebar/admin-sidebar.component.spec.ts
import { AdminSidebarComponent } from './admin-sidebar.component';

describe('AdminSidebarComponent', () => {
  let component: AdminSidebarComponent;
  let fixture: ComponentFixture<AdminSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSidebarComponent ]
=======
>>>>>>> Stashed changes
import { AdminPortfolioListComponent } from './admin-portfolio-list.component';

describe('AdminPortfolioListComponent', () => {
  let component: AdminPortfolioListComponent;
  let fixture: ComponentFixture<AdminPortfolioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPortfolioListComponent ]
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes:src/app/modules/admin/components/admin-portfolio-list/admin-portfolio-list.component.spec.ts
>>>>>>> Stashed changes
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< Updated upstream
    fixture = TestBed.createComponent(AdminPortfolioListComponent);
=======
<<<<<<< Updated upstream:src/app/modules/admin/components/admin-sidebar/admin-sidebar.component.spec.ts
    fixture = TestBed.createComponent(AdminSidebarComponent);
=======
    fixture = TestBed.createComponent(AdminPortfolioListComponent);
>>>>>>> Stashed changes:src/app/modules/admin/components/admin-portfolio-list/admin-portfolio-list.component.spec.ts
>>>>>>> Stashed changes
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
