import { UUID, Pass, PassBase, List, ImageReferenceMap, Query } from "./models";
import { Fetch } from "./fetch/index";

const DEFAULT_CORE_URL: string = "https://api.yourpass.eu";

export * from "./models"

export interface CoreApiOptions {
  fetch: Fetch;
  coreUrl?: string;
}

function appendUrlParam(query: string, name: string, value: any): string {
  return `${query}${query === "" ? "" : "&"}${name}=${encodeURI(
    JSON.stringify(value),
  )}`;
}

export default class CoreApiClient {
  private fetch: Fetch;
  private coreUrl: string;

  constructor(opts: CoreApiOptions) {
    this.fetch = opts.fetch ;
    this.coreUrl = (opts && opts.coreUrl) || DEFAULT_CORE_URL;
  }

  public request<T>(input: RequestInfo, init: RequestInit): Promise<T> {
    return this.fetch(input, init).then((r: Response) => {
      return r.json();
    });;
  }

  public list<T>(resource: string, query?: Query): Promise<List<T>> {
    let queryStr = ``;
    if (query) {
      Object.keys(query).forEach((key: string) => {
        queryStr = appendUrlParam(queryStr, key, query[key]);
      });
    }
    if (queryStr !== "") {
      queryStr = `?${queryStr}`;
    }

    return this.request(`${this.coreUrl}/v1/${resource}${queryStr}`, {
      method: "GET",
    });
  }

  public get<T>(resource: string, id: UUID): Promise<T> {
    return this.request(`${this.coreUrl}/v1/${resource}/${id}`, {
      method: "GET",
    });
  }

  public create<T>(resource: string, object: any): Promise<T> {
    return this.request(`${this.coreUrl}/v1/${resource}`, {
      method: "POST",
      body: JSON.stringify(object),
    });
  }

  public update<T>(resource: string, id: UUID, object: any): Promise<T> {
    return this.request(`${this.coreUrl}/v1/${resource}/${id}`, {
      method: "PUT",
      body: JSON.stringify(object),
    });
  }

  public patch<T>(resource: string, id: UUID, object: any): Promise<T> {
    return this.request(`${this.coreUrl}/v1/${resource}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(object),
    });
  }

  public delete<T>(resource: string, id: UUID): Promise<T> {
    return this.request(`${this.coreUrl}/v1/${resource}/${id}`, {
      method: "DELETE",
    });
  }

  public passList(query?: Query): Promise<List<PassBase>> {
    return this.list<PassBase>("pass", query);
  }

  public passGet(id: UUID): Promise<Pass> {
    return this.get<Pass>("pass", id);
  }

  public passCreate(pass: {
    templateId: UUID;
    dynamicData?: any;
    dynamicImages?: ImageReferenceMap;
  }): Promise<Pass> {
    return this.create<Pass>("pass", pass);
  }

  public passPatch(
    id: UUID,
    pass: {
      templateId?: UUID;
      dynamicData?: any | null;
      dynamicImages?: ImageReferenceMap | null;
      voided?: boolean;
    },
  ): Promise<Pass> {
    return this.patch<Pass>("pass", id, pass);
  }

  /*
  public passUpdate(pass: {
    id: UUID;
    templateId: UUID;
    dynamicData?: any;
    dynamicImages?: ImageReferenceMap;
    voided?: boolean;
  }): Promise<Pass> {
    return this.update<Pass>("pass", pass.id, {
      templateId: pass.templateId,
      dynamicData: pass.dynamicData,
      dynamicImages: pass.dynamicImages,
      voided: pass.voided,
    });
  }
  */
  public passDelete(pass: UUID): Promise<Pass> {
    return this.delete<Pass>("pass", pass);
  }
}
