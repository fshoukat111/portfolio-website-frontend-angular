import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AllProject, Project } from '@app/shared/models';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.sass']
})
export class ProjectListComponent implements OnInit {
  @Input() projectList:any[]=[];
  @Output() projectDetail = new EventEmitter();
  @Output() pageChange = new EventEmitter();

  @Input() config: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * project detail by id child to parent
   * @param _id 
   */
  detail(_id){
    this.projectDetail.emit(_id)
  }

  /**
   * pagination child to parent
   * @param event 
   */
  pageChanged(event){
    this.pageChange.emit(event)
  }

}
