import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category, Project } from '@app/shared/models';

@Component({
  selector: 'app-admin-create-project',
  templateUrl: './admin-create-project.component.html',
  styleUrls: ['./admin-create-project.component.sass']
})
export class AdminCreateProjectComponent implements OnInit {

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
