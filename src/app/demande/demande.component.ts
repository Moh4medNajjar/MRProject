import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    selectedFilter = 'all';


  constructor(private breakpointObserver: BreakpointObserver) {

  }


  tableData = [
    {name:"Mohamed Najjar", date:"22.9.2023", traitee:true},
    {name:"Mohamed Najjar", date:"22.9.2023", traitee:false},
    {name:"Mohamed Najjar", date:"22.9.2023", traitee:true},
    {name:"Mohamed Najjar", date:"22.9.2023", traitee:false},
    {name:"Mohamed Najjar", date:"22.9.2023", traitee:true},
    {name:"Mohamed Najjar", date:"22.9.2023", traitee:false},
    {name:"Mohamed Najjar", date:"22.9.2023", traitee:true},
    {name:"Mohamed Najjar", date:"22.9.2023", traitee:false},


  ]




  get filteredTableData() {
    if (this.selectedFilter === 'all') {
      return this.tableData;
    } else if (this.selectedFilter === 'nonTraitees') {
      return this.tableData.filter((item) => !item.traitee);
    } else if (this.selectedFilter === 'traitees') {
      return this.tableData.filter((item) => item.traitee);
    } else {
      return [];
    }
  }














}
