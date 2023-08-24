import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.UserCreateInput): Promise<void>;
    findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<User[] | null>;
    findOne(id: Prisma.UserWhereInput): Promise<User | null>;
    update(id: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput): Promise<User>;
    remove(id: Prisma.UserWhereUniqueInput): Promise<void>;
}
