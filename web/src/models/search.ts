import axios from '../libs/axios';

export type SearchResult = String[];

export async function getHotKeywords(): Promise<SearchResult> {
  let { data } = await axios('/site/hot-keywords');

  return data;
}

export async function getSuggest(kw: string): Promise<SearchResult> {
  let { data } = await axios(`/site/suggest/${kw}`);

  return data;
}