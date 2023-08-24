import { UpdateUserDto } from './dtos/updateUserDto';
import { Prisma } from '@prisma/client';
import { CreateUserDto } from './dtos/createUserDto';
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
    create(createUserDto: CreateUserDto): Promise<void>;
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
    update(id: Prisma.UserWhereUniqueInput, updateUserDto: UpdateUserDto): Promise<{
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
    remove(id: Prisma.UserWhereUniqueInput): Promise<void>;
}
export {};
