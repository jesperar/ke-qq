import axios from "../libs/axios";
export interface BannerData {
	id: number;
	img: string;
	href: string;
	sort: number;
}

export async function getAllBanner(): Promise<BannerData[]> {
	let { data } = await axios("/course/getAllBanner");

	return data;
}
