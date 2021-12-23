export interface Account {
  accountNumber: number;
  name: string;
  amount: number;
}

export interface Bank {
  id: number;
  shortName: string;
  fullName: string;
}

export interface TransferMoneyRequest {
  fromAccountNumber: string;
  toAccountNumber: string;
  beneficiaryBank: string;
  beneficiaryName: string;
  amount: string;
  description: string;
}