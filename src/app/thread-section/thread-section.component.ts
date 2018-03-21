import { Component, OnInit } from '@angular/core';
import {ThreadVM} from './thread-vm'
import { Observable } from 'rxjs';
import { ApplicationState } from 'app/store/application-state';
import { Store } from '@ngrx/store';
import {stateToThreadSummariesSelector} from './stateToThreadSummariesSelector';
import {ThreadSelectedAction,AllUserThreadAction} from '../store/actions'
import {mapStateToUnreadMessagesCounter} from './mapStateToUnreadMessagesCounter'

@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  unreadMessagesCounter$: Observable<number>;
  threadVm$:Observable<ThreadVM[]>;
  currentSelectedThreadId$:Observable<number>;
  constructor(private store:Store<ApplicationState>) 
  { 
   this.unreadMessagesCounter$ = store.map(mapStateToUnreadMessagesCounter);
   this.threadVm$=store.select(stateToThreadSummariesSelector);
   this.currentSelectedThreadId$=store.map(state=>state.uiState.currentThreadId);
  }

  ngOnInit() {
    this.store.dispatch(new AllUserThreadAction())
  }

  


}
