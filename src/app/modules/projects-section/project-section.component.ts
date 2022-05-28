import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppRotues } from '@app/shared/constants/app.routes';
import { AllProject } from '@app/shared/models';
import { getPortfolioListsSelector, LoadProjectLists } from '@app/modules/projects-section/store';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.sass']
})
export class ProjectSectionComponent implements OnInit, OnDestroy {

  public projectList: AllProject[];
  public categoryList: string;
  private subscriptions$: Subscription[] = [];
  public config: any;
  public page: number = 1;


  constructor(private projectStore: Store, private router: Router) { }

  ngOnInit(): void {
    this.projectListDispatch(this.page);
  }

  /**
   * dispatch project list action
   * @param pageNumber
   */
  private projectListDispatch(pageNumber): void {
    this.projectStore.dispatch(LoadProjectLists({ pageNumber: this.page }));
    this.getProjectList();
  }

  /**
   * get project list
   */
  public getProjectList(): void {
    this.subscriptions$.push(
      this.projectStore.pipe(select(getPortfolioListsSelector)).subscribe((portfolio: any) => {
        if (portfolio.portfolios && portfolio.portfolios.length) {
          this.projectList = portfolio.portfolios;
        }
        this.config = {
          itemsPerPage: portfolio.resultPerPage,
          currentPage: this.page,
          totalItems: portfolio.portfolioCount
        }
      })
    );
  }

  /**
   * navigate project detail by id
   * @param _id
   */
  projectDetail(_id: any) {
    this.router.navigate([`${AppRotues.portfolioDetail}/${_id}`])
  }

  /**
   * pagination from child to parent
   * @param event
   */
  pageChange(event) {
    this.config.currentPage = event
    this.page = this.config.currentPage
    this.projectListDispatch(this.page);
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(subscribe => {
      if (subscribe) {
        subscribe.unsubscribe();
      }
    });
  }
}
