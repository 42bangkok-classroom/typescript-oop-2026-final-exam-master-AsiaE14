import { PurchaseService } from './purchases.service';
import {
  Controller,
  Get,
  /*Post,
  Put,
  Body,
  Patch,
  Param,
  Delete,*/
} from '@nestjs/common';
@Controller('ppurchases')
export class PurchasesController {
  constructor(private readonly  purchasesService: PurchaseService) {}

  @Get()
  findAll() {
    const data = this.purchasesService.findAll();
    return {
      success: true,
      data: data,
      message: 'Fetched purchases successfully',
    };
  }
}
