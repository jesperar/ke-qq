import axios from "axios";
import {BannerData} from '../../../models/banner'

export async function getAllBanner(): Promise<BannerData[]> {
	let { data } = await axios("/api/course/getAllBanner");

	return data;
}
