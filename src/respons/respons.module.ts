import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Respons } from 'src/entities/respons.entity';
import { ResponsController } from './respons.controller';
import { ResponsService } from './respons.service';

@Module({
  imports : [TypeOrmModule.forFeature([Respons])],
  controllers: [ResponsController],
  providers: [ResponsService]
})
export class ResponsModule {}
