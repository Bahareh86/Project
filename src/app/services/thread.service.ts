import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AllUserData} from '../../shared/to/all-user-data'
import{Http} from '@angular/http'
import 'rxjs/add/operator/map';
import {SendNewMessageActionPayload,CreateNewParticipantActionPayload, ThreadSelectedActionPayload} from '../store/actions'
import {commonHttpHeaders} from './commonHttpHeaders'
import { Message } from 'shared/model/message';
@Injectable()
export class ThreadService {

  constructor(private http:Http) {   }


  loadUserThreads(): Observable<AllUserData> {
    
    return this.http.get('/api/threads')
        .map(res => res.json());
}


saveNewMessage(payload: SendNewMessageActionPayload): Observable<any> {
  debugger;
  return this.http.post(`/api/threads/${payload.threadId}`,
  JSON.stringify({text: payload.text}),
   commonHttpHeaders(payload.participantId));
}

 loadNewMessagesForUser(userId:number): Observable<Message[]> {
  return this.http.post('/api/notifications/messages', null, commonHttpHeaders(userId))
      .map(res => res.json().payload);
}

   saveNewParticipant(payload:CreateNewParticipantActionPayload):Observable<any>{
     debugger;
     return this.http.post('api/participants/newParticipant',JSON.stringify({phoneNumber:payload.phoneNumber,userName:payload.username}),
            commonHttpHeaders(payload.currentUserId))
   }


   markThreadAsArchived(payload:number):Observable<any>{
     debugger;
     return this.http.put(`api/threads/${payload}`,{archived:true});
   }


   markMessagesAsRead(payload:ThreadSelectedActionPayload):Observable<any>{
    debugger;
    return this.http.patch(`api/threads/${payload.currentThreadId}`,{read:true},commonHttpHeaders(payload.currentUserId))
   }

}
