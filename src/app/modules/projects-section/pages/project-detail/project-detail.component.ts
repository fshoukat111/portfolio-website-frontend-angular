import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '@app/shared/models';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getPortfolioByIdSelector, LoadProjectDetail } from '../../store';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.sass']
})
export class ProjectDetailComponent implements OnInit {

  private subscriptions$: Subscription[] = [];
  private _id: string;
  public projectDetail:Project

  constructor(private projectStore: Store, private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.subscriptions$.push(
      this.route.paramMap.subscribe(params => {
        this._id = params.get('id');
        this.projectDetailDispatch(this._id)
      }));
  }

  /**
   * dispatch project detail store action
   * @param _id 
   */
  private projectDetailDispatch(_id:string): void {
    this.projectStore.dispatch(LoadProjectDetail({ _id:this._id }));
    this.getProjectDetail();
  }

  /**
   * get project detail by id
   */
  public getProjectDetail(): void {
    this.subscriptions$.push(
      this.projectStore.pipe(select(getPortfolioByIdSelector)).subscribe((portfolio: any) => {
        if (portfolio) {
          this.projectDetail = portfolio;
        }

      })
    );
  }

}
