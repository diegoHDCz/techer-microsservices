import { Prisma } from '@prisma/client';
import { UsersService } from './users.service';
interface UserQueryParams {
    skip: number;
    take: number;
    cursor: Prisma.UserWhereUniqueInput;
    where: Prisma.UserWhereInput;
    orderBy: Prisma.UserOrderByWithRelationInput;
}
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: Prisma.UserCreateInput): Promise<void>;
    findAll(userQueryParam: UserQueryParams): Promise<{
        id: number;
        first_name: string;
        last_name: string;
        document: string;
        email: string;
        phone_number: string;
        birth_date: Date;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findOne(id: Prisma.UserWhereUniqueInput): Promise<{
        id: number;
        first_name: string;
        last_name: string;
        document: string;
        email: string;
        phone_number: string;
        birth_date: Date;
        created_at: Date;
        updated_at: Date;
    }>;
}
export {};
