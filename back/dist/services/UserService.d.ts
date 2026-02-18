import type { IUser } from "../interfaces/IUsers.js";
declare class UserService {
    newUser({ name, document, birthDate, email, password, phone, image, s3Key }: IUser): Promise<{
        name: string;
        document: string;
        birthDate: Date;
        email: string;
        password: string;
        phone: string | null;
        image: string | null;
        s3Key: string | null;
        id: string;
        role: import("../generated/prisma/enums.js").Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    users(): Promise<{
        name: string;
        document: string;
        birthDate: Date;
        email: string;
        password: string;
        phone: string | null;
        image: string | null;
        s3Key: string | null;
        id: string;
        role: import("../generated/prisma/enums.js").Role;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    usersParams(role?: string, name?: string): Promise<{
        name: string;
        document: string;
        birthDate: Date;
        email: string;
        password: string;
        phone: string | null;
        image: string | null;
        s3Key: string | null;
        id: string;
        role: import("../generated/prisma/enums.js").Role;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findUserID(id: string): Promise<{
        name: string;
        document: string;
        birthDate: Date;
        email: string;
        password: string;
        phone: string | null;
        image: string | null;
        s3Key: string | null;
        id: string;
        role: import("../generated/prisma/enums.js").Role;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findUserName(name: string): Promise<{
        name: string;
        document: string;
        birthDate: Date;
        email: string;
        password: string;
        phone: string | null;
        image: string | null;
        s3Key: string | null;
        id: string;
        role: import("../generated/prisma/enums.js").Role;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findUserEmail(email: string): Promise<{
        name: string;
        document: string;
        birthDate: Date;
        email: string;
        password: string;
        phone: string | null;
        image: string | null;
        s3Key: string | null;
        id: string;
        role: import("../generated/prisma/enums.js").Role;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    updateUser(id: string, data: IUser): Promise<{
        before: {
            name: string;
            document: string;
            birthDate: Date;
            email: string;
            password: string;
            phone: string | null;
            image: string | null;
            s3Key: string | null;
            id: string;
            role: import("../generated/prisma/enums.js").Role;
            createdAt: Date;
            updatedAt: Date;
        };
        after: {
            name: string;
            document: string;
            birthDate: Date;
            email: string;
            password: string;
            phone: string | null;
            image: string | null;
            s3Key: string | null;
            id: string;
            role: import("../generated/prisma/enums.js").Role;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    deleteUser(id: string): Promise<string>;
}
export { UserService };
//# sourceMappingURL=UserService.d.ts.map