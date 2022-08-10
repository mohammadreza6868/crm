import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RequestDto } from './Dto/request.Dto';
import { RequestService } from './request.service';

@ApiTags('request')
@Controller('request')
export class RequestController {
  constructor(private readonly requestservic: RequestService) {}

  @Post('create')
  createRequest(@Body() requestDto: RequestDto) {
    return this.requestservic.createRequest(requestDto);
  }

  @Get('getAll')
  async getRequest() {
    return this.requestservic.getRequest();
  }

  @Put('update')
  async updateRequest(@Body() requestDto: RequestDto) {
    return this.requestservic.updateRequest(requestDto);
  }

  @Put('updatestatus/: id ')
  async updateStatus(@Param('id') id: number, @Param() status: number) {
    return this.requestservic.updateStatus(id, status);
  }

  @Delete('delete/:id')
  deleteRequest(@Param('id') id: number) {
    return this.requestservic.deleteRequst(id);
  }
}
