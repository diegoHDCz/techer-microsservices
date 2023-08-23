"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaServiceMock = void 0;
exports.PrismaServiceMock = {
    user: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
};
//# sourceMappingURL=prisma.service.mock.js.map