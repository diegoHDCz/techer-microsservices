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

import { CreateOrderDto } from './dto/create-order.dto';
import { findByUser } from './dto/find-byuser.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiResponse({
    status: 201,
    description: 'The order has been successfully created.',
  })
  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    await this.ordersService.create(createOrderDto);
  }
  @ApiResponse({
    status: 200,
    description: 'List all orders',
  })
  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @ApiParam({ type: 'number', name: 'id' })
  findOne(@Param('id') id: number) {
    return this.ordersService.findOne(id);
  }

  @Post('id')
  findAllByUser(@Body() user_id: findByUser) {
    return this.ordersService.findAllByUser(user_id.user_id);
  }

  @Put(':id')
  @ApiParam({ type: 'number', name: 'id' })
  @ApiResponse({
    status: 200,
    description: 'The order has been successfully updated.',
  })
  update(@Param('id') id: number, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @ApiParam({ type: 'number', name: 'id' })
  @ApiResponse({
    status: 204,
    description: 'The order has been successfully deleted.',
  })
  remove(@Param('id') id: number) {
    return this.ordersService.remove(id);
  }
}
