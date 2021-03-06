import { Component } from '@angular/core';
import { TableOptions, ColumnMode } from 'angular2-data-table';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: `
    <div>
      <h3>virtual scroll</h3>
      <datatable
        class='material'
        [rows]='rows'
        (onPageChange)="paged($event)"
        (onRowClick)="rowClick($event)"
        [options]='options'>
        <datatable-column name="Name" width="200">
          <template let-value="value">
            <strong>{{value}}</strong>
          </template>
        </datatable-column>
        <datatable-column name="Gender" width="300">
          <template let-row="row" let-value="value">
            <i [innerHTML]="row['name']"></i> and <i>{{value}}</i>
          </template>
        </datatable-column>
        <datatable-column name="Age" width="80">
        </datatable-column>
      </datatable>
      <br/>
      <h3><strong>Thanx for checking it out!!</strong>
      <br/><strong>-lago</strong></h3>
      <h1>:)</h1>
    </div>
  `
})
export class AppComponent {
  rows = [];
  timeout: any;

  options = new TableOptions({
    columnMode: ColumnMode.standard,
    headerHeight: 50,
    footerHeight: 50,
    rowHeight: 50,
    scrollbarV: true,
  });

  constructor() {
    this.fetch((data) => {
      this.rows.push(...data);
    });
  }

  paged(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  fetch(cb) {
    let req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  rowClick(args) {
    console.log('rowClick', args);
  }
}
