import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { Category, Project } from '@app/shared/models';
import {
  LoadPortfolioById,
  LoadPortfolioUpdateById,
  getPortfolioByIdSelector,
  LoadPortfolioDeleteById,
  LoadCategoryList,
  getCategoryListSelector
} from '@app/modules/admin/store';
import { AppRotues } from '@app/shared/constants/app.routes';
import { MatDialog } from '@angular/material/dialog';
import { AdminConfirmDialogComponent } from '../../components/admin-confirm-dialog/admin-confirm-dialog.component';

@Component({
  selector: 'app-admin-project-detail',
  templateUrl: './admin-project-detail.component.html',
  styleUrls: ['./admin-project-detail.component.sass']
})
export class AdminProjectDetailComponent implements OnInit {

  private _id: string;
  public projectDetail: Project;
  public categoryList: Category[];
  private subscriptions$: Subscription[] = [];


  constructor(
    private adminStore: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this._id = params.get('id');
    })
    this.portfolioByIdDispatch();
    this.categoryListDispatch();
  }

  /**
  * Dispatch Category List Action
  */
  private categoryListDispatch(): void {
    this.adminStore.dispatch(LoadCategoryList());
    this.getCategoryList();
  }

  /**
  * Get Category List form Admin Store for update
  */
  private getCategoryList(): void {
    this.subscriptions$.push(
      this.adminStore.pipe(select(getCategoryListSelector)).subscribe((categories: Category[]) => {
        if (categories && categories.length) {
          this.categoryList = categories;
        }
      })
    );
  }

  /**
   * Dispatch Portfolio List Action
  */
  private portfolioByIdDispatch(): void {
    this.adminStore.dispatch(LoadPortfolioById({ _id: this._id }));
    this.getPortfolioById();
  }

  /**
   * get portfolio by id using admin store
  */
  private getPortfolioById(): void {
   this.subscriptions$.push(
    this.adminStore.pipe(select(getPortfolioByIdSelector)).subscribe((projectDetail: Project) => {
      if (projectDetail) {
        this.projectDetail = projectDetail;
      }
    })
   )
  }

  /**
   * update portfolio by using admin store
   * @param _id 
   * @param portfolio 
  */
  public updatePortfolioById(_id: string, project: Project): void {
    this.adminStore.dispatch(LoadPortfolioUpdateById({ _id: this.projectDetail._id, adminProject: project }));
    this.getPortfolioById();
    this.router.navigate([`${AppRotues.admin}`])
  }

  /**
   * 
   * @param _id 
  */
  public deletePortfolioById(_id: string): void {
    const dialogRef = this.dialog.open(AdminConfirmDialogComponent, {
      data: {
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.adminStore.dispatch(LoadPortfolioDeleteById({ _id: this.projectDetail._id }));
        this.router.navigate([`${AppRotues.admin}`])
      }
    });
  }

  ngOnDestroy():void{
    this.subscriptions$.forEach(subscribe => {
      if (subscribe) {
        subscribe.unsubscribe();
      }
    });
  }
}
