import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppRotues } from '@app/shared/constants/app.routes';
import { AllProject, Project } from '@app/shared/models';


@Component({
  selector: 'app-admin-project-list',
  templateUrl: './admin-project-list.component.html',
  styleUrls: ['./admin-project-list.component.sass']
})


export class AdminProjectListComponent implements OnInit {
  @Input() portfolioList:AllProject[] = [];
  @Input() page:number;

  @Output() pageChange = new EventEmitter();
  
  public displayedColumns: string[] = ['id','title', 'description', 'url', 'action'];
  
  constructor(private router:Router) {}

  ngOnInit(): void {}

  
  
  /**
   * redirect to post detail page
   * @param project 
   */
  public detailPageRoute(project:Project):void{
    this.router.navigate([`${AppRotues.admin}/${AppRotues.portfolioDetail}/${project._id}`])
  }


  /**
   * 
   * @param event 
   */
  public onPageChange(event){
    this.pageChange.emit(event)
  }

}
