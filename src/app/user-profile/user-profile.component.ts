import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id:number,fname:string,lname:string,email:string, avatar:string} ) { }

  ngOnInit(): void {

    
  }

}
