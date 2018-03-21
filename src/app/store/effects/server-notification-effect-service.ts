import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import {Action, Store} from "@ngrx/store";
import {ThreadService} from '../../services/thread.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {SEND_NEW_MESSAGE_ACTION, NewMessageReceivedAction} from '../actions'
import * as _ from 'lodash';
import { ApplicationState } from 'app/store/application-state';
import { uiState } from 'app/store/reducers/uiStateReducer';

@Injectable()
export class ServerNotificationEffectService {
debugger;
  constructor(private store:Store<ApplicationState>,private threadService:ThreadService) {

   }


   @Effect() newMessages$:Observable<any> = Observable.interval(3000)
   .withLatestFrom(this.store.select("uiState"))
   .map(([any,uiState]) => uiState)
   .filter((uiState:any) => uiState.userId)
   .switchMap(uiState => this.threadService.loadNewMessagesForUser(uiState.userId))
   .withLatestFrom(this.store.select('uiState'))
   .map(([unreadMessages,uiState])=>new NewMessageReceivedAction({
     unreadMessages,
     currentThreadId:uiState.currentThreadId,
     currentUserId:uiState.userId}));
   


}
