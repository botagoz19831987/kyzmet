export interface IUser {
  uid?: string;
  email?: string;
  name?: string;
  phone?: string;
  emailVerified?: boolean;
  product?: string;
  expirationDate?: string;
  selectedJudicialCorpLaws?: string[];
  request?: {
    product: string;
    time: string;
  };
}
