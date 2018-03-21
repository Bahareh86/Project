import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {StoreModule,Action} from '@ngrx/store';
import * as _ from 'lodash';
import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { HomeComponent} from './home/home.component';
import { ThreadService} from './services/thread.service'
import { INISIAL_APPLICATION_STATE, ApplicationState } from './store/application-state';
import { Message } from 'shared/model/message';
import {EffectsModule} from '@ngrx/effects'
import {uiState} from "./store/reducers/uiStateReducer";
import {storeData} from "./store/reducers/uiStateDateReducer";
import {LoadThreadsEffectService} from './store/effects/load-threads-effect.service';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {ThreadSectionComponent} from './thread-section/thread-section.component';
import {ThreadListComponent} from './thread-list/thread-list.component'
import {UserAdditionComponent} from './user-addition/user-addition.component';
import {UserAdditionDialogComponent} from './user-addition/user-addition-dialog/user-addition-dialog.component';
import { MatDialogModule,MatCardModule,MatInputModule,MatButtonModule,MatTableModule,MatIconModule,
         MatMenuModule,} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WriteNewMessageEffectService } from 'app/store/effects/write-new-message-effect-service';
import {AddNewParticipantEffectService} from 'app/store/effects/add-new-participant-effect-service';
import {MarkThreadAsArchivedEffectService} from 'app/store/effects/mark-thread-as-archived-effect-service';
import {ServerNotificationEffectService} from 'app/store/effects/server-notification-effect-service';
import {MarkMessagesAsReadEffectService} from 'app/store/effects/mark-messages-as-read-effect-service'
import { SearchFilterPipe } from 'app/thread-list/pipe/search-filter.pipe';
import {MessagesComponent} from './messages/messages.component';
import {RouterModule} from "@angular/router";
import {storeFreeze} from "ngrx-store-freeze";
import {routes} from './routes'
export const reducers = {
  uiState,
  storeData,
 
};

export const metaReducers = [storeFreeze];

@NgModule({
  declarations: [
    AppComponent,
    ThreadSectionComponent,
    ThreadListComponent,
    UserSelectionComponent,
    UserAdditionComponent,
    MessageSectionComponent,
    UserAdditionDialogComponent,
    MessageListComponent,
    MessagesComponent,
    HomeComponent,
    SearchFilterPipe
    
  ],
  entryComponents: [UserAdditionDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
   StoreModule.forRoot(reducers, {metaReducers,initialState: INISIAL_APPLICATION_STATE}),
   EffectsModule.forRoot([LoadThreadsEffectService,WriteNewMessageEffectService,ServerNotificationEffectService
    ,AddNewParticipantEffectService,MarkThreadAsArchivedEffectService,MarkMessagesAsReadEffectService]),
   StoreDevtoolsModule.instrument(),
   
  ],
  providers: [ThreadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
