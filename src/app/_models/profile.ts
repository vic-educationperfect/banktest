export enum ViewMode {
  Edit = 'edit',
  View = 'view'
}

export interface Profile {
  name: string;
  primaryEmail: string;
  secondaryEmail: string;
  mobilePhone: string;
  officePhone: string;
  address: string;
}