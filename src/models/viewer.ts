import { UUID } from "./uuid";

export enum Permission {
  PROJECT_ACCESS = 0,
  PASS_CREATE = 1,
  PASS_READ = 2,
  PASS_UPDATE = 4,
  PASS_DELETE = 8,
  TEMPLATE_CREATE = 16,
  TEMPLATE_READ = 32,
  TEMPLATE_UPDATE = 64,
  TEMPLATE_DELETE = 128,
  TICKET_ACCOUNTING = 256,
  TICKET_ENTRY = 512,
  TICKET_ESHOP_READ = 1024,
  IMAGE_MANAGE = 2048,
  STAMP_MANAGE = 4096,
}

function match(current: number, rights: Permission) {
  /* tslint:disable:no-bitwise */
  const shifted = current & rights;
  /* tslint:enable:no-bitwise */
  return shifted === rights;
}

interface Projects {
  [key: string]: number;
}

export interface ViewerOptions {
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
  projects: Projects;
}
/**
 * class Viewer represents signed user
 */
export class Viewer {
  /**
   * ID of signed user
   */
  public id: string;
  /**
   * Email address of signed user
   */
  public email: string;
  /**
   * Name address of signed user
   */
  public name: string;
  /**
   * isAdmin says if signed user is system administrator
   */
  public isAdmin: boolean;
  /**
   * projects is map of projectId and number represents permission
   */
  public projects: Projects;

  constructor(viewer: ViewerOptions) {
    this.id = viewer.id;
    this.email = viewer.email;
    this.name = viewer.name;
    this.isAdmin = viewer.isAdmin;
    this.projects = viewer.projects;
    this.hasPermission = this.hasPermission.bind(this);
    this.hasPermissionOnProject = this.hasPermissionOnProject.bind(this);
  }

  /**
   * hasPermision function says if user has {permission} on any project
   * @param permission
   */
  public hasPermission(permission: Permission): boolean {
    if (this.isAdmin) {
      return true;
    }
    for (const key in this.projects) {
      if (this.hasPermissionOnProject(key, permission)) {
        return true;
      }
    }
    return false;
  }

  /**
   * hasPermisionOnProject function says if user has {permission} on project with id {projectId}
   * @param permission
   * @param projectId
   */
  public hasPermissionOnProject(
    projectId: UUID,
    permission: Permission,
  ): boolean {
    return (
      this.isAdmin ||
      (this.projects[projectId] !== undefined &&
        match(this.projects[projectId], permission))
    );
  }
}
