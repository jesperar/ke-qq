import db from '../libs/database';
import {BannerData} from '@/models/banner'

export async function getAllBanner(): Promise<BannerData[]> {
  let res = await db.query('SELECT * FROM banner_table');
  let rows = res[0] as BannerData[];

  return rows;
}
