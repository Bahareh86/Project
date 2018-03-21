import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {ThreadService} from '../../services/thread.service'
import { Observable } from 'rxjs/Observable';
import {CREATE_NEW_PARTICIPANT_ACTION } from '../actions'


@Injectable()
export class AddNewParticipantEffectService {

  constructor(private actions$:Actions,private threadService:ThreadService) {

   }


   @Effect({dispatch:false}) newParticipant$:Observable<any>=this.actions$
   .ofType(CREATE_NEW_PARTICIPANT_ACTION )
   .switchMap(action=>this.threadService.saveNewParticipant(action['payload']))
   

}