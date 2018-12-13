import { UUID } from "./uuid";

export const Rights: {
  [key: string]: number;
} = {
  PROJECT_ACCESS: 0,
  PASS_CREATE: 1,
  PASS_READ: 2,
  PASS_UPDATE: 4,
  PASS_DELETE: 8,
  TEMPLATE_CREATE: 16,
  TEMPLATE_READ: 32,
  TEMPLATE_UPDATE: 64,
  TEMPLATE_DELETE: 128,
  TICKET_ACCOUNTING: 256,
  TICKET_ENTRY: 512,
  TICKET_ESHOP_READ: 1024,
  IMAGE_MANAGE: 2048,
  STAMP_MANAGE: 4096,
};

function generateAccessRights(viewer: ViewerOptions) {
  const result: any = {};
  if (viewer.projects && !viewer.isAdmin) {
    Object.keys(viewer.projects).map((projectId: UUID) => {
      if (Object.prototype.hasOwnProperty.call(viewer.projects, projectId)) {
        const project = viewer.projects[projectId];
        if (!result[projectId]) {
          result[projectId] = {};
        }

        Object.keys(Rights).map((key: string) => {
          if (viewer.isAdmin) {
            result[projectId][key] = true;
            result[key] = true;
          } else {
            const value: number = Rights[key];
            /* tslint:disable:no-bitwise */
            const shifted = project & value;
            /* tslint:enable:no-bitwise */
            const checked = shifted === value;
            result[projectId][key] = checked;

            if (checked) {
              result[key] = true;
            } else if (typeof result[key] === "undefined") {
              result[key] = false;
            }
          }
          return null;
        });
      }
      return null;
    });
  }
  return result;
}

interface Projects {
  [key: string]: number;
}

interface AccessRights {
  [key: string]: boolean | AccessRights;
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
  public projects: any;
  // TODO  add type
  public accessRights: AccessRights;

  constructor(viewer: any) {
    this.id = viewer.id;
    this.email = viewer.email;
    this.name = viewer.name;
    this.isAdmin = viewer.isAdmin;
    this.accessRights = generateAccessRights(viewer);
    this.hasTicketEntryAccess = this.hasTicketEntryAccess.bind(this);
    this.hasTicketEshopAccess = this.hasTicketEshopAccess.bind(this);
    this.hasTicketAccess = this.hasTicketAccess.bind(this);
    this.hasStampCardAccess = this.hasStampCardAccess.bind(this);
  }

  public hasTicketEntryAccess() {
    return this.isAdmin || this.accessRights.TICKET_ENTRY;
  }

  public hasTicketEshopAccess() {
    return this.isAdmin || this.accessRights.TICKET_ESHOP_READ;
  }

  public hasTicketAccess() {
    return this.isAdmin || this.hasTicketEntryAccess();
  }

  public hasStampCardAccess() {
    return this.isAdmin || this.accessRights.STAMP_MANAGE;
  }

  public hasAnyProject() {
    // TODO maybe use this.accessRights.PROJECT_ACCESS
    return this.isAdmin || Object.keys(this.projects).length > 0;
  }
}
