export interface List<T> {
  limit: number;
  page: number;
  totalCount: number;
  data: T[];
}
