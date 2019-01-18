import { Fetch } from "./fetch/index";
import {
  ClientOptions,
  Query,
  List,
  UUID,
  Viewer,
  ViewerOptions,
  Batch,
  BatchResponse,
} from "./models";
import { appendUrlParam } from "./helpers/url";
import {HTTPError} from "./helpers/httpError";

const LIMIT = 1000;

/**
 * A class representing a basic client, which contains:
 *  - common http fetch (request) function.
 *  - common methods for REST resource CRUD operations (List, Get, Patch, Delete,..)
 *  - gother common helper functions
 */
export default class ClientBase {
  /** fetchFunction function for call http request */
  public fetchFunction: Fetch;
  /** enviroment for which was client created */
  public urlBase: string;

  /**
   * Create a DefaultClient.
   * @param {ClientOptions} opts - Contains fetch function and enviroment.
   */
  constructor(opts: ClientOptions) {
    this.fetchFunction = opts.fetch;
    this.urlBase = opts.urlBase;
  }

  /**
   * Common http request function
   */
  public fetch<T>(input: RequestInfo, init: RequestInit): Promise<T> {
    return this.fetchFunction(input, init).then((r: Response) => {
      if (r.status < 400){
        return r.json();
      }
      return Promise.reject(new HTTPError(r))
    });
  }

  /**
   * List of resource on selected api for specified query
   */
  public list<T>(
    urlBase: string,
    resource: string,
    query?: Query,
  ): Promise<List<T>> {
    let queryStr = ``;
    if (query) {
      Object.keys(query).forEach((key: string) => {
        queryStr = appendUrlParam(queryStr, key, query[key]);
      });
    }
    if (queryStr !== "") {
      queryStr = `?${queryStr}`;
    }

    return this.fetch(`${urlBase}/v1/${resource}${queryStr}`, {
      method: "GET",
    });
  }

  /**
   * Get instance of resource on selected api for specified id
   */
  public get<T>(urlBase: string, resource: string, id: UUID): Promise<T> {
    return this.fetch(`${urlBase}/v1/${resource}/${id}`, {
      method: "GET",
    });
  }

  /**
   * Create new instance of resource on selected api
   */
  public create<T>(urlBase: string, resource: string, object: any): Promise<T> {
    return this.fetch(`${urlBase}/v1/${resource}`, {
      method: "POST",
      body: JSON.stringify(object),
    });
  }

  /**
   * Update instance with id of resource on selected api
   */
  public update<T>(
    urlBase: string,
    resource: string,
    id: UUID,
    object: any,
  ): Promise<T> {
    return this.fetch(`${urlBase}/v1/${resource}/${id}`, {
      method: "PUT",
      body: JSON.stringify(object),
    });
  }

  /**
   * Patch instance with id of resource on selected api
   */
  public patch<T>(
    urlBase: string,
    resource: string,
    id: UUID,
    object: any,
  ): Promise<T> {
    return this.fetch(`${urlBase}/v1/${resource}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(object),
    });
  }

  /**
   * Delete instance with id of resource on selected api
   */
  public delete<T>(urlBase: string, resource: string, id: UUID): Promise<T> {
    return this.fetch(`${urlBase}/v1/${resource}/${id}`, {
      method: "DELETE",
    });
  }

  /**
   * Batch operation
   */
  public batch<T>(urlBase: string, resource: string, batch: Batch<T>): Promise<BatchResponse<T>> {
    return this.fetch(`${urlBase}/v1/${resource}/batch`, {
      method: "POST",
      body: JSON.stringify(batch),
    });
  }

  /*
  protected listComplete<T>(
    urlBase: string,
    resource: string,
    query?: Query,
  ): Promise<List<T>>  {
    return new Promise(async (resolve, reject) => {
      try {
        const firstPage = await this.list<T>(api,resource, { page: 1, ...query });
        const allData: T[]= firstPage.data;

        const pageCount = Math.ceil(firstPage.totalCount / LIMIT);
        const promises: Promise<List<T>>[] = [];
        for (let i = 2; i <= pageCount; ) {
          promises.push(this.list<T>(api, resource, { page: i, ...query }));
          i += 1;
        }

        const partials = await Promise.all(promises);
        partials.forEach(p => {
          if (p && p.data) {
            p.data.forEach(i => {
              allData.push(i);
            });
          }
        });

        const response: List<T> = {
          data: allData,
          totalCount: allData.length,
          
        };
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }
  */


  /**
   * Returns current user object (viewer) instance
   */
  public getViewer(): Promise<Viewer> {
    return this.get<ViewerOptions>(this.urlBase, "user", "me").then(
      (resp: ViewerOptions) => {
        return new Viewer(resp);
      },
    );
  }
}
