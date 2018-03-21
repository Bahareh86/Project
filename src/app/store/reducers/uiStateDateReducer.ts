
import {StoreData} from '../store-data'
import {StoreModule,Action} from '@ngrx/store';
import { LOAD_USER_THREADS_ACTION,SEND_NEW_MESSAGE_ACTION,SELECT_USER_ACTION,CREATE_NEW_PARTICIPANT_ACTION, ARCHIVE_THREAD_ACTION,GET_ARCHIVED_THREADS_ACTION,THREAD_SELECTED_ACTION,
    SendNewMessageAction,LoadUserThreadAction,SelectUserAction,CreateNewParticipantAction, ArchiveThreadAction, NEW_MESSAGE_RECEIVED_ACTION, NewMessageReceivedAction, ThreadSelectedAction } from 'app/store/actions';
import * as _ from 'lodash';
import { Message } from 'shared/model/message';
import { Participant } from 'shared/model/participant';
import { Thread } from 'shared/model/thread';

const uuid=require('uuid/v4');
//let messageIdCounter = 20;
export function storeData(state: StoreData, action:Action) : StoreData {
    switch (action.type)  {

        case LOAD_USER_THREADS_ACTION:
        return handleLoadUserThreadsAction(state,action);

        case SEND_NEW_MESSAGE_ACTION:
        return handleSendNewMessageAction(state,action);

        case NEW_MESSAGE_RECEIVED_ACTION:
        return handleNewMessageReceivedAction(state,action);
        
        case CREATE_NEW_PARTICIPANT_ACTION:
        return handleCreateNewParticipantAction(state,action)
        
        case ARCHIVE_THREAD_ACTION:
        return handleArchiveThreadtAction(state,action)
        
        case THREAD_SELECTED_ACTION:
        return handleSelectedThreadAction(state,action)
        
        default:
            return state;
    }
}

function handleLoadUserThreadsAction(state:StoreData,action:LoadUserThreadAction):StoreData{
  debugger;
     const userData=action.payload;
       return {
       participants:_.keyBy(userData.participants,'id'),
       messages:_.keyBy(userData.messages,'id'),
       threads:_.keyBy(userData.threads,'id'),
       
     }
   
  }



  function handleSendNewMessageAction(state:StoreData,action:SendNewMessageAction):StoreData{
    debugger;
    const newStoreState=_.cloneDeep(state);
    const currentThread=newStoreState.threads[action.payload.threadId];
    const newMessage:Message={
      text:action.payload.text,
      threadId:action.payload.threadId,
      timestamp:new Date().getTime(),
      id:uuid(),
      participantId:action.payload.participantId
  
    }
    currentThread.messageIds.push(newMessage.id);
    newStoreState.messages[newMessage.id]=newMessage;
    currentThread.isArchived=false;
    newStoreState.threads[action.payload.threadId]=currentThread;
    return newStoreState;
  
  }
  
  function handleNewMessageReceivedAction(state:StoreData,action:NewMessageReceivedAction):StoreData{
    const newStoreState=_.cloneDeep(state);
    const newMessages=action.payload.unreadMessages;
    newMessages.forEach(message=>{
     //newStoreState.messages[message.id]=message;
     // newStoreState.threads[message.threadId].messageIds.push(message.id)

      if(message.threadId!=action.payload.currentThreadId){
        newStoreState.threads[message.threadId].participants[action.payload.currentUserId]+=1;
        }
     
    })
    
    return newStoreState;
  }

  function handleCreateNewParticipantAction(state:StoreData,action:CreateNewParticipantAction):StoreData{
    debugger;
    const newStoreState=_.cloneDeep(state);
    const newParticipant:Participant={
    id:uuid(),
    name:action.payload.username,
    phoneNumber:action.payload.phoneNumber
   }
   const newThread:Thread={
     id:uuid(),
     messageIds:[],
     participants:{[action.payload.currentUserId]:0,[newParticipant.id]:0},
     isArchived:false
     
   }
   newStoreState.participants[newParticipant.id]=newParticipant;
   newStoreState.threads[newThread.id]=newThread;
   return newStoreState;
  }

  function handleArchiveThreadtAction(state:StoreData,action:ArchiveThreadAction):StoreData{
    debugger;
    const newStoreState=_.cloneDeep(state);
    const threadArchived=newStoreState.threads[action.payload];
    debugger;
    threadArchived.isArchived=true;
    newStoreState.threads[action.payload]=threadArchived;
    return newStoreState;
  }

function handleSelectedThreadAction(state:StoreData,action:ThreadSelectedAction)  
{
  const newStoreState=_.cloneDeep(state);
  newStoreState.threads[action.payload.currentThreadId].participants[action.payload.currentUserId]=0
  return newStoreState;
}

