import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material';
import{UserAdditionDialogComponent} from '../user-addition/user-addition-dialog/user-addition-dialog.component';

@Component({
  selector: 'user-addition',
  templateUrl: './user-addition.component.html',
  styleUrls: ['./user-addition.component.css']
})
export class UserAdditionComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

  addUser():void{
    
    const dialogRef=this.dialog.open(UserAdditionDialogComponent,{
     width:'450px',
     height:'200px',
   })
  }

  

}