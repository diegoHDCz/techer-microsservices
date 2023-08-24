"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaServiceMock = void 0;
exports.PrismaServiceMock = {
    user: {
        create: jest.fn().mockImplementation(),
        findMany: jest.fn().mockResolvedValue(() => Promise.resolve(mockUsers)),
        findUnique: jest.fn().mockImplementation(),
        update: jest.fn().mockImplementation(),
        delete: jest.fn().mockImplementation(),
    },
};
const mockUsers = [
    {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
    },
    {
        id: 2,
        first_name: 'Jane',
        last_name: 'Smith',
    },
];
//# sourceMappingURL=prisma.service.mock.js.map