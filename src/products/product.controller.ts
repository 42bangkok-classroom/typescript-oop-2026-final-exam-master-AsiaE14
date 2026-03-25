import { ProductService } from './product.service';
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
@Controller('products')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

  @Get()
  findAll() {
    const data = this.ProductService.findAll();
    return {
      success: true,
      data: data,
      message: 'Fetched products successfully',
    };
  }
}
