import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from "@angular/common/http";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
 
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
 
import { MatSelectModule } from "@angular/material/select";
import { MatMenuModule } from "@angular/material/menu";
 
import { UserProfileComponent } from './user-profile/user-profile.component';
import userProfileComponentCss from './user-profile/user-profile.component.css';

 
 
 

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UserProfileComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatSelectModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent,UserProfileComponent]
})
export class AppModule { }
