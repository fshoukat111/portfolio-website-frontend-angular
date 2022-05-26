import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppRotues } from '@app/shared/constants/app.routes';
import { AllProject } from '@app/shared/models';
import { getPortfolioListsSelector,LoadProjectLists } from '@app/modules/projects-section/store';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.sass']
})
export class ProjectSectionComponent implements OnInit, OnDestroy {

  public projectList: AllProject[];
  public categoryList: string;
  private subscriptions$: Subscription[] = [];


  constructor(private projectStore: Store, private router: Router) { }

  ngOnInit(): void {
    this.projectListDispatch();
  }

  private projectListDispatch(): void {
    this.projectStore.dispatch(LoadProjectLists());
    this.getProjectList();
  }

  public getProjectList(): void {
    this.subscriptions$.push(
      this.projectStore.pipe(select(getPortfolioListsSelector)).subscribe((portfolio: any) => {
        if (portfolio.portfolios && portfolio.portfolios.length) {
          this.projectList = portfolio.portfolios;
          // this.categoryList = portfolio.categories?.split(',');
          // this.page = portfolio.portfolioCount;
        }
      })
    );

  }

  projectDetail(_id: any) {
    this.router.navigate([`${AppRotues.portfolioDetail}/${_id}`])
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(subscribe => {
      if (subscribe) {
        subscribe.unsubscribe();
      }
    });
  }
}
