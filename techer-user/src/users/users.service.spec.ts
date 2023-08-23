import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { PrismaServiceMock } from './mocks/prisma.service.mock';
import { Prisma } from '@prisma/client';

describe('UsersService', () => {
  let prismaService: PrismaService;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: PrismaServiceMock },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new user', async () => {
      // Mock Prisma's create function

      const userData: Prisma.UserCreateInput = {
        first_name: 'diego',
        last_name: 'hernan',
        email: 'diego.czajka@gmail.com',
        birth_date: new Date('18-01-1989'),
        phone_number: '45984090113',
        document: '12345678910',
      };
      await service.create(userData);

      expect(prismaService.user.create).toHaveBeenCalledWith({
        data: userData,
      });
    });
  });

  describe('findAll', () => {
    it('should find all users', async () => {
      // Mock Prisma's findMany function
      const mockUsers = [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
      ];
      prismaService.user.findMany.mockResolvedValue(mockUsers);

      const result = await usersService.findAll({});

      expect(result).toEqual(mockUsers);
      expect(prismaService.user.findMany).toHaveBeenCalledWith({});
    });
  });
});
