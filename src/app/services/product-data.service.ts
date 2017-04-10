import { Injectable } from '@angular/core';
import {DatabaseService} from "./database.service";
import {Product} from "../models/Product";

@Injectable()
export class ProductDataService extends DatabaseService<Product>{

  constructor() {
    super(Product);
  }

}
