import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category, Project } from '@app/shared/models';

@Component({
  selector: 'app-admin-create-portfolio',
  templateUrl: './admin-create-portfolio.component.html',
  styleUrls: ['./admin-create-portfolio.component.sass']
})
export class AdminCreatePortfolioComponent implements OnInit {

  @Input() categoryList:Category[];

  @Output() createPortfolio = new EventEmitter<Project>();

  public portfolio:Project = new Project();
  
  constructor() { }

  ngOnInit(): void {}

  /**
   * child funcation for create portfolio
   */
  public addPortfolio():void{
    this.createPortfolio.emit(this.portfolio)
  }

}
