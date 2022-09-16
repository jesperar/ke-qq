import React, { useEffect, useState } from 'react';
import { CategoryData, getCategory } from '../../models/category';

import Category from './category';
import Searchbar from './searchbar';
import User from './user';

interface Props {
  catetories: CategoryData[];
}

export default function Header(props: Props) {
  const [catetories, setCatetories] = useState(props.catetories);
  useEffect(() => {
    if (!catetories) {
      getCategory().then(arr => {
        setCatetories(arr);   //????
      });
    }
  }, [catetories]);

  return (
    <div className="g-header">
      <div className="page">
        <div className="left">
          <Logo />
          {catetories ? (
            <Category catetories={catetories} />
          ) : ''}
          <Searchbar />
        </div>
        <div className="right">
          <Links />
          <User />
        </div>
      </div>
    </div>
  );
};

const Logo = () => (
  <a href="http://ke.qq.com/">
    <h1 className="logo">
      腾讯课堂
            </h1>
  </a>
);

const Links = () => (
  <>
    <a className="btn" href="http://ke.qq.com/">入驻/合作</a>
    <a className="btn" href="http://ke.qq.com/">急速版</a>
    <a className="btn" href="http://ke.qq.com/">客户端</a>
    <a className="btn" href="http://ke.qq.com/">私信</a>
  </>
);