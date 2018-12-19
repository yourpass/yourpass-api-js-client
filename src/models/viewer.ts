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

export class Viewer implements ViewerOptions {
  public id: string;
  public email: string;
  public name: string;
  public isAdmin: boolean;
  public projects: Projects;

  constructor(viewer: any) {
    this.id = viewer.id;
    this.email = viewer.email;
    this.name = viewer.name;
    this.isAdmin = viewer.isAdmin;
    this.projects = viewer.projects;
    this.hasPermision = this.hasPermision.bind(this);
    this.hasPermisionOnProject = this.hasPermisionOnProject.bind(this);

  }

  public hasPermision(rights: Permission) {
    if (this.isAdmin) {
      return true;
    }
    for (const key in this.projects) {
      if (this.hasPermisionOnProject(key, rights)) {
        return true;
      }
    }
    return false;
  }

  public hasPermisionOnProject(projectId: UUID, rights: Permission) {
    return (
      this.isAdmin ||
      (this.projects[projectId] !== undefined &&
        match(this.projects[projectId], rights))
    );
  }

}
