
import { Component, OnInit } from '@angular/core';
import {ApplicationState} from '../store/application-state';
import {Thread} from '../../shared/model/thread'
import { Store} from '@ngrx/store';
import{Observable}from 'rxjs';
import 'rxjs/add/operator/skip';
import * as _ from 'lodash';

export function mapStateToParticipant(state:ApplicationState):string{
   
     const currentThreadId = state.uiState.currentThreadId;
     const currentThread = state.storeData.threads[currentThreadId];
     if (!currentThread) {
        return "";
    }

    const names = _.keys(currentThread.participants).map(
        participantId => state.storeData.participants[participantId].name);

    return _.join(names, ",");



}