import { UUID, Pass, PassBase, List, ImageReferenceMap, Query } from "./models";
import DefaultClient from "./DefaultClient";
import { API_URL } from "./constants/enviroments";

/**
 * A class representing a core client. It prvides interface to work with Passes, Images and templates.
 */
export default class CoreClient extends DefaultClient {
  public passList(query?: Query): Promise<List<PassBase>> {
    return this.list<PassBase>(API_URL.CORE, "pass", query);
  }

  /**
   * Read pass instance with ID
   * @param id pass id
   */
  public passGet(id: UUID): Promise<Pass> {
    return this.get<Pass>(API_URL.CORE, "pass", id);
  }

  /**
   * Create new pass
   * @param pass new pass object
   */
  public passCreate(pass: {
    templateId: UUID;
    dynamicData?: any;
    dynamicImages?: ImageReferenceMap;
  }): Promise<Pass> {
    return this.create<Pass>(API_URL.CORE, "pass", pass);
  }

  /**
   * Patch pass 
   * @param id
   * @param pass
   */
  public passPatch(
    id: UUID,
    pass: {
      templateId?: UUID;
      dynamicData?: any | null;
      dynamicImages?: ImageReferenceMap | null;
      voided?: boolean;
    },
  ): Promise<Pass> {
    return this.patch<Pass>(API_URL.CORE, "pass", id, pass);
  }

  /**
   * Update pass
   * @param pass 
   */
  public passUpdate(pass: {
    id: UUID;
    templateId: UUID;
    dynamicData?: any;
    dynamicImages?: ImageReferenceMap;
    voided?: boolean;
  }): Promise<Pass> {
    return this.update<Pass>(API_URL.CORE, "pass", pass.id, {
      templateId: pass.templateId,
      dynamicData: pass.dynamicData,
      dynamicImages: pass.dynamicImages,
      voided: pass.voided,
    });
  }

  /**
   *  Delete Pass
   * @param pass 
   */
  public passDelete(pass: UUID): Promise<Pass> {
    return this.delete<Pass>(API_URL.CORE, "pass", pass);
  }
}
