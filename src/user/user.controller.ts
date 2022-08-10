import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './Dto/user.Dto';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService){}

    @Post('createUser')
    createUser(@Body() userDto: UserDto){
        return this.userService.createUser(userDto);
    }

    @Get('getUser')
    async getUser(){
        return this.userService.getUser();
    }

    @Put('updateUser')
    async updateUser(@Body() userDto : UserDto){
        return this.userService.updateUser(userDto);
    }

    @Delete('deleteUser/:id')
    deleteUser(@Param('id') id : number){
        return this.userService.deleteUser(id);
    }
}
