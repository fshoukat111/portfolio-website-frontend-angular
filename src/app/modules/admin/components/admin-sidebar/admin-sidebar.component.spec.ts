import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< Updated upstream:src/app/modules/admin/components/admin-sidebar/admin-sidebar.component.spec.ts
import { AdminSidebarComponent } from './admin-sidebar.component';

describe('AdminSidebarComponent', () => {
  let component: AdminSidebarComponent;
  let fixture: ComponentFixture<AdminSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSidebarComponent ]
=======
import { AdminPortfolioListComponent } from './admin-portfolio-list.component';

describe('AdminPortfolioListComponent', () => {
  let component: AdminPortfolioListComponent;
  let fixture: ComponentFixture<AdminPortfolioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPortfolioListComponent ]
>>>>>>> Stashed changes:src/app/modules/admin/components/admin-portfolio-list/admin-portfolio-list.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< Updated upstream:src/app/modules/admin/components/admin-sidebar/admin-sidebar.component.spec.ts
    fixture = TestBed.createComponent(AdminSidebarComponent);
=======
    fixture = TestBed.createComponent(AdminPortfolioListComponent);
>>>>>>> Stashed changes:src/app/modules/admin/components/admin-portfolio-list/admin-portfolio-list.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});