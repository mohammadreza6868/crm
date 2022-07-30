import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Respons } from 'src/entities/respons.entity';
import { Repository } from 'typeorm';
import { ResponsDto } from './Dto/responsDto';

@Injectable()
export class ResponsService {
    constructor(@InjectRepository(Respons)
        private responsrepository : Repository<Respons>){}

        createResponse(responsDto : ResponsDto){
            let respons = new Respons()
            respons.description=responsDto.description;
            respons.Request= <any>responsDto.requestid
            respons.save()
            return 'عملیات با موفقیت انجام شد';
        }

        async getRespons(){
            const respons = await this.responsrepository.find();
            return respons;
        }

        async updateRespons(responsDto : ResponsDto){
            let respons = await this.responsrepository.findOne(responsDto)
            if(respons){
                 respons.id = responsDto.id;
                 respons.description = responsDto.description;
                 respons.Request = <any>responsDto.requestid;
                 respons.save();
                 return 'آپدیت انجام شد';
            }
            return 'آیدی مورد نظر یافت نشد';
        }

        deleteRespons(id : number){
            this.responsrepository.delete(id);
            return 'حذف انجام شد';
        }

    }

