import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResponsDto } from './Dto/respons.Dto';
import { ResponsService } from './respons.service';

@ApiTags('respons')
@Controller('respons')
export class ResponsController {
    constructor(private readonly responsService : ResponsService){}

    @Post('create')
    createRespons(@Body() responsDto : ResponsDto){
        return this.responsService.createResponse(responsDto);
    }

    @Get('getall')
    async getRespons(){
        return this.responsService.getRespons()
    }

    @Put('update')
    async updateRespons(@Body() responsDto : ResponsDto){
        return this.responsService.updateRespons(responsDto);
    }

    @Delete('delete/:id')
    deleteRespons(@Param('id') id : number){
        return this.responsService.deleteRespons(id);
    }
}
