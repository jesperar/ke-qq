import axios from '../libs/axios';

export interface BannerData {
  ID: number;
  img: string;
  href: string;
  sort: number;
}


export async function getAllBanner(): Promise<BannerData[]> {
  let { data } = await axios('/course/banners');

  return data;
}