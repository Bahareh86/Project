import { UiState, INISIAL_UI_STATE } from "./ui-state";
import { StoreData, INISIAL_STORE_DATA } from "./store-data";
//import {RouterStateUrl} from "./utils";
//import * as fromRouter from '@ngrx/router-store';

export interface ApplicationState{
  uiState:UiState;
  storeData:StoreData
  //routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const INISIAL_APPLICATION_STATE:ApplicationState={
  uiState:INISIAL_UI_STATE,
  storeData:INISIAL_STORE_DATA,
  //routerReducer: undefined
}