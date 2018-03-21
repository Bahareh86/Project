import { Component, OnInit } from '@angular/core';
import { ApplicationState } from 'app/store/application-state';
import{Store} from '@ngrx/store';
import {CreateNewParticipantAction} from '../../store/actions'
import { Observable } from 'rxjs/Observable';
import {MatDialog,MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-user-addition-dialog',
  templateUrl: './user-addition-dialog.component.html',
  styleUrls: ['./user-addition-dialog.component.css']
})
export class UserAdditionDialogComponent implements OnInit {
 username:string;
 phoneNumber:string;
 currentUserId:number;
  constructor(private store:Store<ApplicationState>, private dialogRef: MatDialogRef<UserAdditionDialogComponent>) {
    
    store.subscribe(state=>this.currentUserId=state.uiState.userId);
    
   }

  ngOnInit() {
    this.dialogRef.updatePosition({ top: '-200px', left: '600px' });
  }

  addCreatedUser(model:any){
    
    model['currentUserId']=this.currentUserId;
    this.store.dispatch(new CreateNewParticipantAction(model));
    //this.dialogRef.close;
  }
 
  
}
