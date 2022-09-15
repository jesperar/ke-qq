import { CategoryData } from "@/models/category";
import db from "~/libs/database";
import {get, set} from '~/libs/redis'

export async function getCategory(): Promise<CategoryData[]> {
  // 1 if exist get from redis
  
  // 2 if not exist get from db, save in redis
  let [categorys] = await db.query('SELECT * FROM category_table')
  let [rows] = await db.query('SELECT * FROM category_item_table ORDER BY sort ASC')
  console.log(categorys, rows);
  
	return [];
}
