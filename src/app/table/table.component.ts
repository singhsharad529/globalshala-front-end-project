import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
 
 
 
import { TableApiService } from "../table-api.service";
import { UserProfileComponent } from '../user-profile/user-profile.component';
 
 

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dropdown=''
  tableList:any=[];
  tableData:any;

  
  constructor(private tableService:TableApiService,public dialog:MatDialog) {

    

   }

  ngOnInit(): void {
    this.tableService.getTableApi().subscribe(data=>{
      console.warn(data);
      this.tableList=data;
    });
  }

  openDialog(tableid:number,tablefname:string,tablelname:string,tableemail:string, tableavatar:string){
    
    console.log(tableid)
    console.log(tablefname)
     this.dialog.open(UserProfileComponent,{
      width:'250px',
      data: { 
        id: tableid ,
        fname:tablefname,
        lname:tablelname,
        email:tableemail,
        avatar:tableavatar
      
      }
      

    })

  


  }

  
 

}
