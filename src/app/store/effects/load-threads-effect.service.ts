import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {ThreadService} from '../../services/thread.service'
import { Observable } from 'rxjs/Observable';
import {ALL_USER_THREADS_ACTION,LoadUserThreadAction} from '../../store/actions';

@Injectable()
export class LoadThreadsEffectService {

  constructor(private actions$: Actions, private threadService: ThreadService) {
    
   }
   
   @Effect() userThreads$: Observable<Action> = this.actions$
   .ofType(ALL_USER_THREADS_ACTION)
   .switchMap(action => this.threadService.loadUserThreads())
   .map(allUserData => new LoadUserThreadAction(allUserData));


  
}
