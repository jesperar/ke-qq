import {SearchResult} from '@/models/search'
import db from '../libs/database'
import {maxHotKeywords, maxSuggestKeywords} from '../config/app'
import { RowDataPacket } from 'mysql2';

// 热门搜索
// export async function getHot(): Promise<SearchResult>{
//   // DESC 倒序
//   const data = (await db.query
//     (`SELECT keyword FROM search_record_table ORDER BY count DESC LIMIT ${maxHotKeywords}`)
//     )[0] as RowDataPacket[]
//   console.log(data);
  
//   return data.map(row => row.keyword) 
// }

// 联想 以kw开头的前N个
export async function getSuggest(kw: string): Promise<SearchResult> {
  let data = (await db.query(
    `
    SELECT
      keyword
    FROM search_record_table
    WHERE
      keyword LIKE ?
    ORDER BY
      count DESC
    LIMIT ${maxHotKeywords}`,
    [
      kw + '%'
    ]
  ))[0] as RowDataPacket[];
  return data.map(row => row.keyword);
}