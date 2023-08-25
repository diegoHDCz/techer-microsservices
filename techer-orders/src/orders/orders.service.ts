import { Injectable } from '@nestjs/common';
import { Order, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.OrderCreateInput): Promise<void> {
    await this.prisma.order.create({
      data,
    });
  }

  async findAll(): Promise<Order[]> {
    return await this.prisma.order.findMany();
  }

  async findAllByUser(user_id: number): Promise<Order[] | null> {
    return await this.prisma.order.findMany({
      where: { userId: Number(user_id) },
    });
  }

  async findOne(id: number): Promise<Order | null> {
    return await this.prisma.order.findFirst({
      where: { id: Number(id) },
    });
  }

  async update(
    id: number,
    updateOrderDto: Prisma.OrderUpdateInput,
  ): Promise<Order | null> {
    return await this.prisma.order.update({
      data: updateOrderDto,
      where: { id: Number(id) },
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.order.delete({
      where: { id: Number(id) },
    });
  }
}
