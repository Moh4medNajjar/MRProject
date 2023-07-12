import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';

import {Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NgIf} from '@angular/common';


export interface DialogData {

  name: string ;
}
@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss']
})
export class EmployeComponent {

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver) {}


  name: string = "Mohamed Ahmed Sidi";


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name: this.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  tableData = [
    {item:"HP Laptop", date:"12.9.2023", status:"Non livré"},
    {item:"IPad Apple", date:"12.9.2023", status:"Prêt"},
    {item:"HP Laptop", date:"12.9.2023", status:"Non livré"},
    {item:"IPad Apple", date:"12.9.2023", status:"Prêt"},
    {item:"HP Laptop", date:"12.9.2023", status:"Non livré"},
    {item:"IPad Apple", date:"12.9.2023", status:"Prêt"},
  ];

  getStyle(item: string){
    if (item === "Non livré"){
      return "redStyle";
    }
    else if (item === "Prêt"){
      return "greenStyle";
    }
    else return ""

  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.html',
  standalone: true,

})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
