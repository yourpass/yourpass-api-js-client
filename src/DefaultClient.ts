import { Fetch } from "./fetch/index";
import {
  ClientOptions,
  Query,
  List,
  UUID,
  Viewer,
  ViewerOptions,
} from "./models";
import { Enviroment, API_URL, profiles } from "./constants/enviroments";
import { appendUrlParam } from "./helpers/url";

/**
 * A class representing a basic client, which contains:
 *  - common http fetch (request) function.
 *  - common methods for REST resource CRUD operations (List, Get, Patch, Delete,..)
 *  - gother common helper functions
 */
export default class DefaultClient {
  /** fetchFunction function for call http request */
  public fetchFunction: Fetch;
  /** enviroment for which was client created */
  public enviroment: Enviroment;

  /**
   * Create a DefaultClient.
   * @param {ClientOptions} opts - Contains fetch function and enviroment.
   */
  constructor(opts: ClientOptions) {
    this.fetchFunction = opts.fetch;
    this.enviroment = opts.enviroment || Enviroment.PRODUCTION;
  }

  /**
   * Returns base url for api and current enviroment
   */
  public getURL(api: API_URL) {
    return profiles[this.enviroment][api];
  }

  /**
   * Common http request function
   */
  public fetch<T>(input: RequestInfo, init: RequestInit): Promise<T> {
    return this.fetchFunction(input, init).then((r: Response) => {
      if (r.status < 400){
        return r.json();
      }
      return Promise.reject(new Error(r.statusText))
    });
  }

  /**
   * List of resource on selected api for specified query
   */
  public list<T>(
    api: API_URL,
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

    return this.fetch(`${this.getURL(api)}/v1/${resource}${queryStr}`, {
      method: "GET",
    });
  }

  /**
   * Get instance of resource on selected api for specified id
   */
  public get<T>(api: API_URL, resource: string, id: UUID): Promise<T> {
    return this.fetch(`${this.getURL(api)}/v1/${resource}/${id}`, {
      method: "GET",
    });
  }

  /**
   * Create new instance of resource on selected api
   */
  public create<T>(api: API_URL, resource: string, object: any): Promise<T> {
    return this.fetch(`${this.getURL(api)}/v1/${resource}`, {
      method: "POST",
      body: JSON.stringify(object),
    });
  }

  /**
   * Update instance with id of resource on selected api
   */
  public update<T>(
    api: API_URL,
    resource: string,
    id: UUID,
    object: any,
  ): Promise<T> {
    return this.fetch(`${this.getURL(api)}/v1/${resource}/${id}`, {
      method: "PUT",
      body: JSON.stringify(object),
    });
  }

  /**
   * Patch instance with id of resource on selected api
   */
  public patch<T>(
    api: API_URL,
    resource: string,
    id: UUID,
    object: any,
  ): Promise<T> {
    return this.fetch(`${this.getURL(api)}/v1/${resource}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(object),
    });
  }

  /**
   * Delete instance with id of resource on selected api
   */
  public delete<T>(api: API_URL, resource: string, id: UUID): Promise<T> {
    return this.fetch(`${this.getURL(api)}/v1/${resource}/${id}`, {
      method: "DELETE",
    });
  }

  /**
   * Returns current user object (viewer) instance
   */
  public getViewer(): Promise<Viewer> {
    return this.get<ViewerOptions>(API_URL.CORE, "user", "me").then(
      (resp: ViewerOptions) => {
        return new Viewer(resp);
      },
    );
  }
}
