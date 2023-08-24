import { UpdateUserDto } from './dtos/updateUserDto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiParam, ApiResponse } from '@nestjs/swagger';
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
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //@ApiBody({ description: 'body: createUserDto create' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @Post()
  async create(
    @Body()
    createUserDto: CreateUserDto,
  ) {
    const { first_name, last_name, document, email, phone, birth_date } =
      createUserDto;
    return await this.usersService.create({
      first_name,
      last_name,
      document,
      email,
      phone_number: phone,
      birth_date: new Date(birth_date),
    });
  }

  @Get()
  findAll(@Param() userQueryParam: UserQueryParams) {
    return this.usersService.findAll(userQueryParam);
  }

  @Get(':id')
  @ApiParam({ type: 'number', name: 'id' })
  async findOne(@Param('id') id: Prisma.UserWhereUniqueInput) {
    return await this.usersService.findOne(id);
  }

  @Put(':id')
  @ApiParam({ type: 'number', name: 'id' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully updated.',
  })
  update(
    @Param('id') id: Prisma.UserWhereUniqueInput,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiParam({ type: 'number', name: 'id' })
  @ApiResponse({
    status: 204,
    description: 'The user has been successfully deleted.',
  })
  remove(@Param('id') id: Prisma.UserWhereUniqueInput) {
    return this.usersService.remove(id);
  }
}
