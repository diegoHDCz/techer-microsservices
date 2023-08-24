import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

import { PrismaServiceMock } from './mocks/prisma.service.mock';

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useClass: PrismaServiceMock as any,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    // prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(usersService).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', async () => {
      const userData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        phone_number: '1234567890',
        birth_date: new Date('1990-01-01T00:00:00Z'),
      };

      const createdUser = await usersService.create(userData);

      expect(createdUser).toBeDefined();
    });
  });

  describe('findAll', () => {
    it('should find all users', async () => {
      const mockUsers = [
        {
          id: 1,
          first_name: 'John',
          last_name: 'Doe',
          // ... other properties
        },
        {
          id: 2,
          first_name: 'Jane',
          last_name: 'Smith',
          // ... other properties
        },
      ];

      const foundUsers = await usersService.findAll({});

      expect(foundUsers).toEqual(mockUsers);
    });
  });

  // Similar implementations for findOne, update, and remove tests...
});
