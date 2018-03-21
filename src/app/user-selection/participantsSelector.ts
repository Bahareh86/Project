
import { Component, OnInit } from '@angular/core';
import {ApplicationState} from '../store/application-state';
import {Participant} from '../../shared/model/participant'
import { Store} from '@ngrx/store';
import{Observable}from 'rxjs';
import 'rxjs/add/operator/skip';
import * as _ from 'lodash';

export function participantsSelector(state: ApplicationState):Participant[]{
  
  const participants=_.values(state.storeData.participants);
  if(!participants){
      return []
  }
  return participants
}
