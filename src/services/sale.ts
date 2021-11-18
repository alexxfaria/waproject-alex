import cache from 'helpers/rxjs-operators/cache';
import ISale from 'interfaces/models/sale';
import ISaleRole from 'interfaces/models/saleRole';
import { IPaginationParams, IPaginationResponse } from 'interfaces/pagination';
import { Observable } from 'rxjs';

import apiService, { ApiService } from './api';

export class SaleService {
  constructor(private apiService: ApiService) {}

  public list(params: IPaginationParams): Observable<IPaginationResponse<ISale>> {
    return this.apiService.get('/sale', params);
  }

  public current(): Observable<ISale> {
    return this.apiService.get('/sale/current');
  }

  public roles(refresh: boolean = false): Observable<ISaleRole[]> {
    return this.apiService.get('/sale/roles').pipe(cache('sale-service-roles', { refresh }));
  }

  public save(model: Partial<ISale>): Observable<ISale> {
    return this.apiService.post('/sale', model);
  }

  public delete(id: number): Observable<void> {
    return this.apiService.delete(`/sale/${id}`);
  }
}

const saleService = new SaleService(apiService);
export default saleService;
