import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {ThreadService} from '../../services/thread.service'
import { Observable } from 'rxjs/Observable';
import {THREAD_SELECTED_ACTION,ThreadSelectedAction} from '../actions'


@Injectable()
export class MarkMessagesAsReadEffectService {

  constructor(private actions$:Actions,private threadService:ThreadService) {

   }

  @Effect({dispatch:false}) markMessagesAsRead$: Observable<any>=this.actions$
  .ofType("THREAD_SELECTED_ACTION")
  .switchMap(action=>this.threadService.markMessagesAsRead(action['payload']));



   

}