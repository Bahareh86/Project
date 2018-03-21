import {Action} from '@ngrx/store';
import {AllUserData} from '../../shared/to/all-user-data';
import { Message } from 'shared/model/message';

export const LOAD_USER_THREADS_ACTION='LOAD_USER_THREADS_ACTION';
export const ALL_USER_THREADS_ACTION='ALL_USER_THREADS_ACTION';
export const SEND_NEW_MESSAGE_ACTION="SEND_NEW_MESSAGE_ACTION";
export const NEW_MESSAGE_RECEIVED_ACTION="NEW_MESSAGE_RECEIVED_ACTION";
export const SELECT_USER_ACTION="SELECT_USER_ACTION" ; 
export const THREAD_SELECTED_ACTION = 'THREAD_SELECTED_ACTION'; 
export const CREATE_NEW_PARTICIPANT_ACTION ='CREATE_NEW_PARTICIPANT_ACTION';
export const ARCHIVE_THREAD_ACTION="ARCHIVE_THREAD_ACTION";
export const GET_ARCHIVED_THREADS_ACTION="GET_ARCHIVED_THREADS_ACTION"
export const ERROR_OCCURRED_ACTION = 'ERROR_OCCURRED_ACTION';

export class AllUserThreadAction implements Action{
    type=ALL_USER_THREADS_ACTION
}
export class LoadUserThreadAction implements Action{
    type=LOAD_USER_THREADS_ACTION;
    constructor(public payload?:AllUserData){

   }
}

export interface ThreadSelectedActionPayload{
    currentThreadId:number,
    currentUserId:number;
}

export class ThreadSelectedAction implements Action{
    type=THREAD_SELECTED_ACTION
    constructor(public payload?:ThreadSelectedActionPayload){}
}


export class SelectUserAction implements Action{
  type=SELECT_USER_ACTION;
  constructor(public payload?:number){}
}

export interface SendNewMessageActionPayload{
    text:string;
    threadId:number;
    participantId:number;
}

export class SendNewMessageAction implements Action{
    type=SEND_NEW_MESSAGE_ACTION;
    constructor(public payload?:SendNewMessageActionPayload){}
}

export interface NewMessageReceivedActionPayload{
    unreadMessages:Message[],
    currentThreadId:number,
    currentUserId:number
}

export class NewMessageReceivedAction implements Action{
    type=NEW_MESSAGE_RECEIVED_ACTION;
    constructor(public payload?:NewMessageReceivedActionPayload){}

}

export interface CreateNewParticipantActionPayload{
   id:number;
   username:string;
   phoneNumber:string;
   currentUserId:number;
}

export class CreateNewParticipantAction implements Action{
    type=CREATE_NEW_PARTICIPANT_ACTION;
    constructor(public payload?:CreateNewParticipantActionPayload){}
}

export class ArchiveThreadAction implements Action{
    type=ARCHIVE_THREAD_ACTION;
    constructor(public payload?:number){}
}


export class ErrorOccurredAction implements Action{
    type=ERROR_OCCURRED_ACTION;
    constructor(public payload?:string){}
}




