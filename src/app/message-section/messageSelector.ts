import { Component, OnInit } from '@angular/core';
import {ApplicationState} from '../store/application-state';
import {Thread} from '../../shared/model/thread'
import { Store} from '@ngrx/store';
import{Observable}from 'rxjs';
import 'rxjs/add/operator/skip';
import * as _ from 'lodash';
import {MessageVM} from './message-vm'
import { Message } from '../../shared/model/message';



export function messageSelector(state: ApplicationState): MessageVM[]{
    
    const currentThreadId = state.uiState.currentThreadId,
          thread=state.storeData.threads[currentThreadId];
          
 
    if (!thread){
        return [];
  }
  const messageIds=thread.messageIds;
  const messages =messageIds.map(messageId=>state.storeData.messages[messageId]);
  return messages.map(_.partial(mapMessageToMessageSummary, state));
  


}
function mapMessageToMessageSummary(state:ApplicationState,message:Message):MessageVM{
    debugger;
   const participantName=state.storeData.participants[message.participantId].name;
   
    return {
        id:message.id,
        text:message.text,
        participantName:participantName,
        timestamp:message.timestamp

    }
  }