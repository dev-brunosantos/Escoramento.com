export interface IUser {
    name: string; 
    document: string;
    birthDate: Date;
    email: string; 
    password: string;
    phone?: string;
    image?: string;
    s3Key?: string;
}