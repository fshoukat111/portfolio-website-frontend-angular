import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AllProject, Category, Project } from '@app/shared/models';
import {
  LoadCategoryList,
  LoadCreatePortfolio,
  LoadPortfolioList,
  getCategoryListSelector,
  getPortfolioListSelector
}
  from '@app/modules/admin/store';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  public isExpanded = true;
  public isShowing = true;
  public tab: number;
  public categoryList: Category[] = [];
  public portfolioList: AllProject[] = [];
  public page: number = 1;
  private subscriptions$: Subscription[] = [];

  constructor(private adminStore: Store) { }

  ngOnInit(): void {
    this.categoryListDispatch();
    this.portfolioListDispatch(this.page);
  }

  /**
 * select sidebar tab using child admin-sidebar component event
 * @param name 
 */
  public selectTab(name: number) {
    this.tab = name;
  }

  public mouseenter(expanded): void {
    if (!expanded) {
      this.isShowing = true;
    }
  }

  public mouseleave(expanded): void {
    if (!expanded) {
      this.isShowing = false;
    }
  }


  /**
   * Dispatch Category List Action
   */
  private categoryListDispatch(): void {
    this.adminStore.dispatch(LoadCategoryList());
    this.getCategoryList();
  }

  /**
 * Get Category List form Admin Store
 */
  private getCategoryList(): void {
    this.subscriptions$.push(
      this.adminStore.pipe(select(getCategoryListSelector)).subscribe((categories: Category[]) => {
        if (categories && categories.length) {
          this.categoryList = categories;
        }
      })
    )
  }


  /**
   * Dispatch Portfolio List Action
   */
  public portfolioListDispatch(pageNumber: number): void {
    this.adminStore.dispatch(LoadPortfolioList({ pageNumber: this.page }));
    this.getPortfolioList();



  }

  /**
   * Get Portfolio List form Admin Store
   */
  private getPortfolioList(): void {
    this.subscriptions$.push(
      this.adminStore.pipe(select(getPortfolioListSelector)).subscribe((portfolio: any) => {
        if (portfolio.portfolios && portfolio.portfolios.length) {
          this.portfolioList = portfolio.portfolios;
          this.page = portfolio.portfolioCount;
        }
      })
    );
  }

  /**
   * parent funcation for create portfolio
   */
  public createPortfolio(adminProject: Project): void {
    this.adminStore.dispatch(LoadCreatePortfolio({ adminProject: adminProject }));
  }

  public pageChange(event):void {
    this.page = event.pageIndex;
    this.page += 1;
    this.portfolioListDispatch(this.page)
  }

  ngOnDestroy():void{
    this.subscriptions$.forEach(subscribe => {
      if (subscribe) {
        subscribe.unsubscribe();
      }
    });
  }
}
