import path from 'path';

export const staticRoot = path.resolve(__dirname, '../build');
export const serverPort = 8080;

export const enableCors = true;

export const enableCache = false;

//search 
export const maxHotKeywords = 5
export const maxSuggestKeywords = 10