import * as productModel from '../models/productModel';
import { IProduct } from '../interfaces/productInterface';

export async function create(product: IProduct) {
  const data = await productModel.create(product);
  return { status: 201, data };
}