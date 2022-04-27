import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.sass']
})
export class AdminSidebarComponent implements OnInit {
  public showSubmenu: boolean = false;
  public isShowing = false;
  public showSubSubMenu: boolean = false;
  public isExpanded = true;
  // public tab: number;
  @Output() tab = new EventEmitter<number>();
  @Output() expanded = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  public mouseenter(): void {
    this.isExpanded = true;
    this.expanded.emit(this.isExpanded);
  }

  public mouseleave(): void {
    this.isExpanded = false;
    this.expanded.emit(this.isExpanded);
  }


  /**
   * select sidebar tab
   * @param name 
   */
  public selectTab(name: number) {
    // this.tab = name;
    this.tab.emit(name);
  }

}
