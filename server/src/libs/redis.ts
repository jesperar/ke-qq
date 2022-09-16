import redis from 'redis';
import { promisify } from 'util';
import redisConf from '~/config/redis';

let client = redis.createClient(redisConf);

export const get = promisify(client.get).bind(client);
export const set = promisify(client.set).bind(client);

//keys
export const KEY_APP_CATEGORY_CACHE = 'KEY_APP_CATEGORY_CACHE';
