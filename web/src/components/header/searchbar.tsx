import React, { useEffect, useState } from 'react';
import {appData} from '../../models/app';
import { getSuggest, getHotKeywords ,SearchResult } from '../../models/search';

export default function Searchbar() {
  const [hotKeywords, setHotKeywords] = useState<SearchResult | undefined>(appData?.hotKeywords);
  const [suggest, setSuggest] = useState<SearchResult | undefined>();
  const [kw, setKw] = useState('');
  const [showList, setShowList] = useState(false)

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
          onFocus={ev => setShowList(true)}
          onBlur={ev => setShowList(false)}
          onInput={ev => setKw((ev.target as HTMLInputElement).value)}
          type="text" 
          placeholder="搜索课程" />
        <div className="btn">
          <i className="icon icon-search-w" />
        </div>
      </div>
      <div className="list" style={{display: showList ? 'block' : 'none'}}>
        <div className="title">热门搜索</div>
        <ul>
          {hotKeywords?.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
      </div>
    </div>
  );
}