import {UiState} from '../ui-state'
import {StoreModule,Action} from '@ngrx/store';
import {SELECT_USER_ACTION,THREAD_SELECTED_ACTION,ERROR_OCCURRED_ACTION, 
        ThreadSelectedAction,SelectUserAction,ErrorOccurredAction } from 'app/store/actions';
import * as _ from 'lodash';
import { Message } from 'shared/model/message';
const uuid=require('uuid/v4');

export function uiState(state: UiState, action:Action) : UiState {
    switch (action.type)  {
 
        case SELECT_USER_ACTION:
        return handleSelectUserAction(state,action)
        
        case THREAD_SELECTED_ACTION:
        return handleSelectedThreadAction(state,action)
        
        case ERROR_OCCURRED_ACTION:
        return handleErrorOccurredAction(state,action)

        default:
            return state;
    }
}
 function handleSelectUserAction(state:UiState,action:SelectUserAction):UiState{
    const newUiState:UiState=Object.assign({},state);
    const selectedUserId=action.payload;
    newUiState.userId=selectedUserId;
    return newUiState;
  }

  function handleSelectedThreadAction(state:UiState,action:ThreadSelectedAction):UiState{
      debugger;
    const newUiState:UiState=Object.assign({},state);
    newUiState.currentThreadId=action.payload.currentThreadId;
     return newUiState;
  }

  function handleErrorOccurredAction(state:UiState,action:ErrorOccurredAction):UiState{
    const newUiState:UiState=Object.assign({},state);
    newUiState.currentError=action.payload;
    return newUiState;
  }