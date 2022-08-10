import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from './customer.service';
import { CustomerDto } from './Dto/customer.Dto';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerservice: CustomerService) {}

  @Post('create')
  createCustomer(@Body() customerDto: CustomerDto) {
    return this.customerservice.createCustomer(customerDto);
  }

  @Get('getall')
  async getCustomer() {
    return this.customerservice.getCustomer();
  }

  @Put('update')
  async updateCustomer(@Body() customerDto: CustomerDto) {
      return this.customerservice.updateCustomer(customerDto);
  }

  @Delete('delete/:id')
  deleteCustomer(@Param('id') id : number){
      return this.customerservice.deleteCustomer(id);
  }
}
