import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category, Portfolio } from '@app/shared/models';

@Component({
  selector: 'app-admin-create-portfolio',
  templateUrl: './admin-create-portfolio.component.html',
  styleUrls: ['./admin-create-portfolio.component.sass']
})
export class AdminCreatePortfolioComponent implements OnInit {

  @Input() categoryList:Category[];

  @Output() createPortfolio = new EventEmitter<Portfolio>();

  public portfolio:Portfolio = new Portfolio();
  
  constructor() { }

  ngOnInit(): void {}

  /**
   * child funcation for create portfolio
   */
  public addPortfolio():void{
    this.createPortfolio.emit(this.portfolio)
  }

}
