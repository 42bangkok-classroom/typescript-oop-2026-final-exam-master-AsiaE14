import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Purchases,PurchasesItem} from './purchases.interface'
import * as fs from 'fs';
import * as path from 'path';
@Injectable()
export class PurchaseService {
  findAll() {
    let dataJSON: Purchases<PurchasesItem>[];
    let filepath =path.join( './data/purchases.json', './dat.json')
    try {
      dataJSON = JSON.parse(
        fs.readFileSync(filepath, 'utf-8'),
      ) as Purchases<PurchasesItem>[];
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
      }
      throw new InternalServerErrorException("adaswewes");
    
    }
    const result = dataJSON.filter((a) => a === a);
    return result;
  }
}
