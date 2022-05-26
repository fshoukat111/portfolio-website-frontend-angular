import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import * as projectAction from '@app/modules/projects-section/store/project.actions';
import { of } from 'rxjs';
import { LocalStorageService } from '@app/core/services/local-storage.service';
import { AllProject,Project } from '@app/shared/models';
import { ProjectService } from '@app/core/services/projects/project.service';


@Injectable()
export class ProjectSectionEffects {
  constructor(
    private actions$: Actions,
    private projectService: ProjectService,
    private localStorage: LocalStorageService,
  ) { }



  /**
   *get Project List
   * Triggers when LoadProjectList action is dispatched
   * On success, dispatches LoadProjectListSuccess action
  */
  getProjectList$ = createEffect(() =>
    this.actions$.pipe(ofType(projectAction.LoadProjectLists),
      switchMap((action) => {
        return this.projectService.getProjectList().pipe(map((projectList: AllProject) => {
          return projectAction.LoadProjectListsSuccess({ projectList });
        }),
          catchError((error) => {
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(projectAction.LoadProjectListsFail({ error }));
          })
        );
      })
    )
  );

  /**
   *get Project by id
   * Triggers when LoadProjectList action is dispatched
   * On success, dispatches LoadProjectListSuccess action
  */
    getProjectById$ = createEffect(() =>
      this.actions$.pipe(ofType(projectAction.LoadProjectDetail),
        switchMap((action) => {
          return this.projectService.getProjectDetail(action._id).pipe(map((projectDetail: Project) => {
            return projectAction.LoadProjectDetailSuccess({ projectDetail });
          }),
            catchError((error) => {
              // this.messageService.add({
              //   severity: 'error',
              //   summary: 'Login Error',
              //   detail: 'Invalid email or password',
              // });
              return of(projectAction.LoadProjectDetailFail({ error }));
            })
          );
        })
      )
    );
}
