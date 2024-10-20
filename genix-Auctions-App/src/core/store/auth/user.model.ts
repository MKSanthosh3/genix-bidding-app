export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    receiveEmails: boolean;
    rememberMe: boolean;
    createdAt: Date;
    updatedAt: Date;
  }