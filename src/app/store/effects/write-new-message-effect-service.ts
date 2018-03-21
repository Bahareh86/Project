import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {ThreadService} from '../../services/thread.service'
import { Observable } from 'rxjs/Observable';
import {SEND_NEW_MESSAGE_ACTION,ErrorOccurredAction} from '../actions'


@Injectable()
export class WriteNewMessageEffectService {

  constructor(private actions$:Actions,private threadService:ThreadService) {

   }


   @Effect({dispatch:false}) newMessages$:Observable<any>=this.actions$
   .ofType(SEND_NEW_MESSAGE_ACTION)
   .switchMap(action=>this.threadService.saveNewMessage(action['payload']))
   //.catch(()=>Observable.of(new ErrorOccurredAction("Error Ocurred while saving message") ))

}