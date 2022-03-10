import { Component, OnInit, ViewChild } from '@angular/core';
import { Category, Portfolio } from '@app/shared/models';
import { select, Store } from '@ngrx/store';
import { LoadCategoryList, LoadCreatePortfolio } from './stores/admin.actions';
import { getCategoryListSelector } from './stores/admin.selectors';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  tab: number;
  selectedComponent: {}
  public categoryList:Category[] = [];

  constructor(private adminStore: Store) {}

  ngOnInit(): void {
    this.categoryListDispatch();
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  /**
   * select sidebar tab
   * @param name 
   */
  selectTab(name: number) {
    this.tab = name;
  }


  categoryListDispatch():void{
    this.adminStore.dispatch(LoadCategoryList());
    this.getCategoryList();
  }

  getCategoryList():void{
    this.adminStore.pipe(select(getCategoryListSelector)).subscribe((categories:Category[]) => {
      if(categories && categories.length){
        this.categoryList = categories;
      }
    });
  }

  /**
   * parent funcation for create portfolio
   */
  createPortfolio(adminPortfolio: Portfolio) {
    console.log("adminPortfolio",adminPortfolio)
    this.adminStore.dispatch(LoadCreatePortfolio({ adminPortfolio: adminPortfolio }));
  }

}
