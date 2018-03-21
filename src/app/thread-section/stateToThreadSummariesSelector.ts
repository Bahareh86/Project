import { Component, OnInit } from '@angular/core';
import {ApplicationState} from '../store/application-state';
import {Thread} from '../../shared/model/thread'
import { Store} from '@ngrx/store';
import{Observable}from 'rxjs';
import 'rxjs/add/operator/skip';
import * as _ from 'lodash';
import {ThreadVM} from './thread-vm'
import { Message } from '../../shared/model/message';
import { stat } from 'fs';


export function stateToThreadSummariesSelector(state:ApplicationState):ThreadVM[]{
  const threads=_.values(state.storeData.threads);
  const currentUserId=state.uiState.userId;
  if(currentUserId!=undefined){
    var userThreads=threads.map(thread=>(_.includes(_.keys(thread.participants),currentUserId.toString()))==true ? thread:'');
       _.remove(userThreads,(n)=>n=="");
      
   return userThreads.map(_.partial(mapThreadToThreadVM,state))
  }
  


}
function mapThreadToThreadVM(state:ApplicationState,thread:Thread):ThreadVM{
   
 return{
     id:thread.id,
     user:buildThreadParticipantsList(state,thread),
     isArchived:thread.isArchived,
     read:thread.id===state.uiState.currentThreadId||thread.participants[state.uiState.userId]===0
 }
}

function buildThreadParticipantsList(state:ApplicationState,thread:Thread):string{
  const participantsIds= _.keys(thread.participants);
  const currentUserId=state.uiState.userId;
  if (currentUserId!=undefined)
  {
    var i = participantsIds.indexOf(currentUserId.toString());
    if(i != -1) {
        participantsIds.splice(i, 1);
        var names=participantsIds.map(participantId=>state.storeData.participants[participantId].name);
        var phoneNumbers=participantsIds.map(participantId=>state.storeData.participants[participantId].phoneNumber);
        var users=phoneNumbers+' '+'('+ names +')';
      
    }

    
  }
   
return users;
}

