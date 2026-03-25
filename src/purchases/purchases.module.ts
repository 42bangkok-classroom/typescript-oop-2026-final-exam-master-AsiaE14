import { Module } from '@nestjs/common';
import { PurchaseService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
@Module({
  controllers: [PurchasesController],
  providers: [PurchaseService],
})
export class PurchasesModule {}
