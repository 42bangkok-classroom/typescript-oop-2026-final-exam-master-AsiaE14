import {
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { IProduct } from './product.interface';
import * as fs from 'fs';
@Injectable()
export class ProductService {
  findAll() {
    let dataJSON: IProduct[];
    try {
      dataJSON = JSON.parse(
        fs.readFileSync('./data/products.json', 'utf-8'),
      ) as IProduct[];
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
      }
      throw new InternalServerErrorException();
    }
    const result = dataJSON.filter((a) => a === a);
    return result;
  }
}
