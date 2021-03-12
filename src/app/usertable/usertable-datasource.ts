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
  {birth: 'DD/MM/YYYY', name: 'Nom', surname: 'Prénom', initial: 'PH'},
  {birth: 'DD/MM/YYYY', name: 'Nom', surname: 'Prénom', initial: 'PH'},
  {birth: 'DD/MM/YYYY', name: 'Nom', surname: 'Prénom', initial: 'PH'},
  {birth: 'DD/MM/YYYY', name: 'Nom', surname: 'Prénom', initial: 'PH'},
  {birth: 'DD/MM/YYYY', name: 'Nom', surname: 'Prénom', initial: 'PH'},
];

/**
 * Data source for the Usertable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UsertableDataSource extends DataSource<UsertableItem> {
  data: UsertableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort = new MatSort;

  constructor() {
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
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }
  getPagedData(arg0: UsertableItem[]): any {
    throw new Error('Method not implemented.');
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
        case 'birth': return compare(a.birth, b.birth, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
