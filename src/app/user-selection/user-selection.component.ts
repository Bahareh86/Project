import { Component, OnInit } from '@angular/core';
import { ApplicationState } from 'app/store/application-state';
import {Store} from "@ngrx/store";
import {SelectUserAction} from '../store/actions';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import{participantsSelector} from './participantsSelector';
import {Participant} from '../../shared/model/participant';

@Component({
  selector: 'user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {
  threadIdUser:number;
  participants$:Observable<Participant[]>
  
  constructor(private store:Store<ApplicationState>) {
    debugger;
    
    this.participants$=store.map(participantsSelector);
    
   }

  ngOnInit() {
  }

  onSelectUser(id:number){
                          
    this.store.dispatch(new SelectUserAction(id));
  }
  

}
