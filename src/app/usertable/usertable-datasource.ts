import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface UsertableItem {
  birth: string;
  name: string;
  surname: string;
  initial: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: UsertableItem[] = [
  {birth: '11/08/1980', name: 'MARTIN', surname: 'Camille', initial: 'MC'},
  {birth: '14/03/1966', name: 'BERNARD', surname: 'Evan', initial: 'BE'},
  {birth: '12/11/2002', name: 'THOMAS', surname: 'Adrien', initial: 'TA'},
  {birth: '24/09/1971', name: 'PETIT', surname: 'Antoine', initial: 'PA'},
  {birth: '02/05/1992', name: 'ROBERT', surname: 'Baptiste', initial: 'RB'},
  {birth: '08/07/1999', name: 'RICHARD', surname: 'Lena', initial: 'RL'},
  {birth: '02/12/1987', name: 'DURAND', surname: 'Julien', initial: 'DJ'},
  {birth: '13/10/1998', name: 'DUBOIS', surname: 'Maeva', initial: 'DM'},
  {birth: '21/06/1975', name: 'MOREAU', surname: 'Louise', initial: 'MD'},
  {birth: '14/07/1977', name: 'LAURENT', surname: 'Noemie', initial: 'LN'},
  {birth: '07/01/1973', name: 'SIMON', surname: 'Jade', initial: 'SJ'},
  {birth: '24/03/1988', name: 'MICHEL', surname: 'Laura', initial: 'ML'},
  {birth: '22/09/1981', name: 'LEROY', surname: 'Jules', initial: 'LJ'},
  {birth: '13/07/1995', name: 'ROUX', surname: 'Adam', initial: 'RA'},
  {birth: '14/02/1956', name: 'DAVID', surname: 'Axel', initial: 'DA'},
  {birth: '12/10/1994', name: 'BERTRAND', surname: 'Arthur', initial: 'BA'},
  {birth: '24/10/2001', name: 'MOREL', surname: 'Matteo', initial: 'MM'},
  {birth: '05/05/1996', name: 'FOURNIER', surname: 'Gabriel', initial: 'FG'},
  {birth: '08/12/1988', name: 'GIRARD', surname: 'Raphael', initial: 'GR'},
  {birth: '02/11/1967', name: 'BONNET', surname: 'Lucie', initial: 'BL'},
  {birth: '13/10/1968', name: 'DUPONT', surname: 'Julie', initial: 'DJ'},
  {birth: '21/10/1975', name: 'LAMBERT', surname: 'Vincent', initial: 'LV'},
  {birth: '14/07/1967', name: 'FONTAINE', surname: 'Quentin', initial: 'FQ'},
  {birth: '07/01/1983', name: 'ROUSSEAU', surname: 'Tom', initial: 'RT'},
  {birth: '24/04/1958', name: 'VINCENT', surname: 'Romain', initial: 'VR'},
  {birth: '22/04/1981', name: 'MULLER', surname: 'Manon', initial: 'MM'},
];

/**
 * Data source for the Usertable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UsertableDataSource extends DataSource<UsertableItem> {
  data: UsertableItem[] = EXAMPLE_DATA;
 

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<UsertableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    //set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }
  private getPagedData(data: UsertableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize)
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: UsertableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
