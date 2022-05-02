import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppRotues } from '@app/shared/constants/app.routes';
import { AllPortfolio, Portfolio } from '@app/shared/models';


@Component({
  selector: 'app-admin-portfolio-list',
  templateUrl: './admin-portfolio-list.component.html',
  styleUrls: ['./admin-portfolio-list.component.sass']
})


export class AdminPortfolioListComponent implements OnInit {
  @Input() portfolioList:AllPortfolio[] = [];
  @Input() page:number;

  @Output() pageChange = new EventEmitter();
  
  public displayedColumns: string[] = ['id','title', 'description', 'url', 'action'];
  
  constructor(private router:Router) {}

  ngOnInit(): void {}

  
  
  /**
   * redirect to post detail page
   * @param portfolio 
   */
  public detailPageRoute(portfolio:Portfolio):void{
    this.router.navigate([`${AppRotues.admin}/${AppRotues.portfolioDetail}/${portfolio._id}`])
  }


  /**
   * 
   * @param event 
   */
  public onPageChange(event){
    this.pageChange.emit(event)
  }

}
