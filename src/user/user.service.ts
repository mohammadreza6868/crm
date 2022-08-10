import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './Dto/user.Dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
        private userRepository : Repository <User>){}

        createUser (userDto : UserDto){
let user = new User();
user.FerstName = userDto.FerstName;
user.LastName = userDto.LastName;
user.Email = userDto.Email;
user.PhoneNumber = userDto.PhoneNumber;
user.UserName =userDto.UserName;
user.Password = userDto.Password;
user.customer =<any> userDto.CustomerId;
user.save()
 return 'عملیات با موفقیت انجام شد'
  }

  async getUser(){
    const user = await this.userRepository.find()
    return user;
  }

  async updateUser(userDto : UserDto){
    let user = await this.userRepository.findOne(userDto)
    if(user){
      user.FerstName = userDto.FerstName;
      user.LastName = userDto.LastName;
      user.Email = userDto.Email;
      user.PhoneNumber = userDto.PhoneNumber;
      user.UserName = userDto.UserName;
      user.Password = userDto.Password;
      user.customer = <any>userDto.CustomerId;
      user.save()
      return 'آپدیت انجام شد';
    }
    return 'آیدی مورد نظر یافت نشد';

  }

  deleteUser(id : number){
    this.userRepository.delete(id);
    return 'حذف انجام شد';
  }
}
