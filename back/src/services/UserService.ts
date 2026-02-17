import { deleteFileS3 } from "../configs/awsConfig.js";
import { prisma } from "../configs/prisma.js";
import type { IUser } from "../interfaces/IUsers.js";


class UserService {
    async newUser({
        name, document, birthDate, email, password, phone, image, s3Key
    }: IUser) {

        const emailExistents = await this.findUserEmail(email);

        if (emailExistents) {
            throw new Error("O e-mail informado já foi cadastrado no sistema.")
        }

        const user = await prisma.user.create({
            data: {
                name,
                document,
                birthDate: new Date(birthDate),
                email,
                password,
                phone: phone ?? null,
                image: image ?? null,
                s3Key: s3Key ?? null
            }
        });

        return user;
    }

    async users() {
        const users = await prisma.user.findMany();
        return users;
    }

    async usersParams(role?: string, name?: string) {
    const users = await prisma.user.findMany({
        where: {
            ...(name && {
                name: {
                    contains: name,
                    mode: "insensitive"
                }
            }),
            ...(role && role !== "Todos" && {
                role: role as "ADMIN" | "CLIENT"
            })
        }
    });

    return users;
}


    async findUserID(id: string) {
        const userID = await prisma.user.findFirst({
            where: { id: id }
        })

        return (userID);
    }

    async findUserName(name: string) {
        const userName = await prisma.user.findFirst({
            where: { name: { equals: name, mode: 'insensitive' } }
        })

        return (userName);
    }

    async findUserEmail(email: string) {
        const userEmail = await prisma.user.findFirst({
            where: { email }
        })

        return userEmail;
    }

    async updateUser(id: string, data: IUser) {

        const getUser = await this.findUserID(id);

        if (!getUser) {
            throw new Error("O ID informado não está vinculado a nenhum usuário cadastrado no sistema.")
        }

        if (data.email && data.email !== getUser.email) {
            const emailExists = await this.findUserEmail(data.email);
            if (emailExists) {
                throw new Error("Este novo e-mail já está em uso por outro usuário.");
            }
        }

        if (data.s3Key && getUser?.s3Key) {
            await deleteFileS3(getUser.s3Key);
        }

        const update = await prisma.user.update({
            where: { id: getUser.id },
            data: {
                name: data.name ?? getUser.name,
                document: data.document ?? getUser.document,
                birthDate: data.birthDate ?? getUser.birthDate,
                email: data.email ?? getUser.email,
                phone: data.phone ?? getUser.phone,
                ...(data.image && { documents: data.image }),
                ...(data.s3Key && { s3Key: data.s3Key }),
                role: data.role ?? getUser.role
            }
        })

        return {
            before: getUser,
            after: update
        };
    }

    async deleteUser(id: string) {
        const getUser = await this.findUserID(id);

        if (!getUser) {
            throw new Error("O ID informado não está vinculado a nenhum usuário cadastrado no sistema.")
        }

        await prisma.user.delete({
            where: { id }
        });

        return `Usuário ${getUser.name.toUpperCase()} foi excluído do sistema.`
    }
}

export { UserService };