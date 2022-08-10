import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/entities/customer.entity';
import { Repository } from 'typeorm';
import { CustomerDto } from './Dto/customer.Dto';

@Injectable()
export class CustomerService {

constructor(@InjectRepository(Customer)
    private customerrepository : Repository<Customer>){}

    createCustomer(costomerDto : CustomerDto){
        let customer = new Customer()
  customer.name= costomerDto.name;
  customer.save()
  return 'عملیات انجام شد';

    }

  async  getCustomer(){
        const customer = await this.customerrepository.find();
        return customer;
    }

    async updateCustomer(customerDto : CustomerDto){
        let customer = await this.customerrepository.findOne(customerDto)
        if (customer){
            customer.id=customerDto.id;
            customer.name = customerDto.name;
            customer.save();
return 'آپدیت انجام شد';
        }
        return 'آیدی مورد نظر یافت نشد';
    }


    deleteCustomer(id :number){
        this.customerrepository.delete(id);
        return 'حذف انجام شد';
    }

}
