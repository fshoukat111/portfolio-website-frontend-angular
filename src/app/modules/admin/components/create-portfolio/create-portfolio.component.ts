import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category, Portfolio } from '@app/shared/models';

@Component({
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.sass']
})
export class CreatePortfolioComponent implements OnInit {

  @Input() categoryList:Category[];

  @Output() createPortfolio = new EventEmitter<Portfolio>();

  public portfolio:Portfolio = new Portfolio();
  selectedCategory = [];
  constructor() { }

  ngOnInit(): void {}

  /**
   * child funcation for create portfolio
   */
  public addPortfolio():void{
    this.createPortfolio.emit(this.portfolio)
  }

  onCategorySelection(){
    console.log(this.selectedCategory,'selectedCategory')
  }

}
