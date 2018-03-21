import { Component, OnInit } from '@angular/core';
import { ApplicationState } from 'app/store/application-state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  message:string;

  constructor(private store:Store<ApplicationState>) { }

  ngOnInit() {
    this.store.subscribe(state=>this.message=state.uiState.currentError)
  }

}
