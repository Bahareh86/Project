import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {ThreadService} from '../../services/thread.service'
import { Observable } from 'rxjs/Observable';
import {ARCHIVE_THREAD_ACTION } from '../actions'


@Injectable()
export class MarkThreadAsArchivedEffectService {

  constructor(private actions$:Actions,private threadService:ThreadService) {

   }


   @Effect({dispatch:false}) markThreadAsArchived$:Observable<any>=this.actions$
   .ofType(ARCHIVE_THREAD_ACTION)
   .switchMap(action=>this.threadService.markThreadAsArchived(action['payload']));


}