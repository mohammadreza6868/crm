import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestModule } from './request/request.module';
import { ResponsModule } from './respons/respons.module';
import { CustomerModule } from './customer/customer.module';


@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(), RequestModule, ResponsModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
