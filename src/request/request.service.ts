import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { request } from 'http';
import { Request } from 'src/entities/request.entity';
import { Repository } from 'typeorm';
import { RequestDto } from './Dto/requestDto';

@Injectable()
export class RequestService {
    constructor(@InjectRepository(Request)
        private requestRepository : Repository<Request>){}

        createRequest(requestDto : RequestDto){
           
            let request = new Request()
         
            request.titele=requestDto.titele;
            request.description=requestDto.description;
            request.createdatatime=requestDto.createdatatime;
            request.modifydatetime=requestDto.modifydatetime;
            request.User=<any>requestDto.userid;
            request.status=1 ;
            request.save();
            return 'عملیات با موفقیت انجام شد';
        }

        async getRequest(){
           const request=await this.requestRepository.find()
           return request ;
        }

async updateRequest(requestDto : RequestDto){
    let request = await this.requestRepository.findOne(requestDto)
    if( request){
        request.titele = requestDto.titele;
        request.description = requestDto.description;
        request.createdatatime = requestDto.createdatatime;
        request.modifydatetime = requestDto.modifydatetime;
        request.User = <any>requestDto.userid;
        
        request.save();
        return 'آپدیت انجام شد';
        
    }
    return 'آیدی مورد نظر یافت نشد';
}

 async updateStatus (id : number , status :number){

    let request = await this.requestRepository.findOne(id);
    
     if(request){
         request.status = status;
          request.save()
         return 'عملیات با موفقیت انجام شد';
    }
 

 }

deleteRequst(id : number){
    this.requestRepository.delete(id);
    return 'حذف انجام شد';
}
}
