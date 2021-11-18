import { enRoles } from './sale';

export default interface ISaleRole {
  role: enRoles;
  name: string;
  description?: string;
}
