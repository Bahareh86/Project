import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store"
import {ApplicationState} from '../store/application-state';
import{Observable}from 'rxjs';
import {mapStateToParticipant} from '.././message-section/mapStateToParticipant';
import { ThreadService } from 'app/services/thread.service';
import {LoadUserThreadAction,SendNewMessageAction} from '../store/actions';
import {MessageVM} from './message-vm';
import {messageSelector} from './messageSelector'
import { UiState } from 'app/store/ui-state';
@Component({
  selector: 'message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {
  participantNames$:Observable<string>;
  messages$:Observable<MessageVM[]> 
  uiState:UiState;
  
  constructor(private store:Store<ApplicationState>,private threadService:ThreadService) {
    store.subscribe(state=>console.log("message section received state",state));
    this.participantNames$=store.map(mapStateToParticipant);
    this.messages$=store.map(messageSelector);
    store.subscribe(state=>this.uiState=state.uiState);
    
   }

  ngOnInit() {
    
  }
  onNewMessage(input:any):void{
   this.store.dispatch(new SendNewMessageAction({text:input.value,threadId:this.uiState.currentThreadId,
   participantId:this.uiState.userId}));
   input.value='';
  }

  

}
