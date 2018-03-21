import { Component, OnInit,Input,Output,EventEmitter,ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ThreadVM } from 'app/thread-section/thread-vm';
import { ApplicationState } from 'app/store/application-state';
import {Store} from '@ngrx/store';
import {ThreadSelectedAction, ArchiveThreadAction} from '../store/actions'
import { stateToThreadSummariesSelector } from 'app/thread-section/stateToThreadSummariesSelector';
import { ThreadService } from 'app/services/thread.service';


@Component({
  selector: 'thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ThreadListComponent implements OnInit {
  //isArchivedClicked:boolean
  currentUserId:number;
  @Input() 
  threads:ThreadVM[];

  @Input() 
  currentSelectedThreadId:number;

 @Output()
   threadSelected=new EventEmitter();
 
  constructor(private store:Store<ApplicationState>,private threadService: ThreadService) { }

  ngOnInit() {
    
  }
  onArchive(threadId:number){
    this.store.dispatch(new ArchiveThreadAction(threadId));
  }
  selectThread(threadId:number){
    this.store.subscribe(state=>this.currentUserId=state.uiState.userId);
    this.store.dispatch(new ThreadSelectedAction({currentThreadId:threadId,currentUserId:this.currentUserId}))
  }

  

}
