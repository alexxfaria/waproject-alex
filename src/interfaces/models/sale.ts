export default interface ISale {
  id?: number;
  description: string;
  amount: number;
  price: number;
  roles: enRoles[];
  createdDate?: Date;
  updatedDate?: Date;
}

export enum enRoles {
  sysAdmin = 'sysAdmin',
  admin = 'admin',
  sale = 'sale'
}
