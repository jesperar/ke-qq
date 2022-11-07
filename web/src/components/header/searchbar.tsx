import React, { useEffect, useState } from 'react';
import { getSuggest, getHotKeywords ,SearchResult } from '../../models/search';

export default function Searchbar() {
  const [hotKeywords, setHotKeywords] = useState<SearchResult | undefined>();
  const [suggest, setSuggest] = useState<SearchResult | undefined>();
  const [kw, setKw] = useState('');

  useEffect(() => {
    if (!hotKeywords) {
      getHotKeywords().then(data => {
        console.log(data);
        setHotKeywords(data);   //??????
      });
    }
  }, [hotKeywords]);

  useEffect(() => {
    if (!kw) setSuggest(undefined);
    else {
      getSuggest(kw).then(data => {
        setSuggest(data);   //??????
      });
    }
  }, [kw]);


  return (
    <div className="searchbar">
      <div className="search">
        <i className="type">课程</i>
        <input 
          className="keyword"
          onInput={ev => setKw((ev.target as HTMLInputElement).value)}
          type="text" 
          placeholder="搜索课程" />
        <div className="btn">
          <i className="icon icon-search-w" />
        </div>
      </div>
      <div className="list">
        <div className="title">热门搜索</div>
        <ul>
          {hotKeywords?.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
      </div>
    </div>
  );
}