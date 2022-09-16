import { CategoryData } from '@/models/category';
import db from '~/libs/database';
import { get, set, KEY_APP_CATEGORY_CACHE } from '~/libs/redis';
import { enableCache } from '~/config/app';

export async function getCategory(): Promise<CategoryData[]> {
  //1-找redis要（99.999999%）
  if (enableCache) {
    let str = await get(KEY_APP_CATEGORY_CACHE);

    if (str) {
      try {
        return JSON.parse(str);
      } catch (e) { }
    }
  }

  //2-万一没有
  let categories = (await db.query('SELECT * FROM category_table'))[0] as any[];
  let items = (await db.query('SELECT * FROM category_item_table ORDER BY sort ASC'))[0] as any[];

  //组装数据
  let arr: CategoryData[] = [];

  categories.forEach(data => {
    const { parent_id } = data;
    delete data.parent_id;

    if (parent_id == 0) {
      arr.push(data);
    } else {
      //找到parent_id对应的数据
      let parent = categories.find(data => data.ID == parent_id);

      //添加到children
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push(data);
      }
    }
  });

  items.forEach(item => {
    let parent = categories.find(data => data.ID == item.category_id);

    if (parent) {
      parent.items = parent.items || [];
      parent.items.push(item);

      delete item.category_id;
      delete item.sort;
    }
  });

  //写入缓存
  if (enableCache) {
    await set(KEY_APP_CATEGORY_CACHE, JSON.stringify(arr));
  }

  return arr;
}