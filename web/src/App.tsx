import React, {useEffect, useState} from 'react';
import * as ModelBanner from './models/banner'
import {BannerData} from '../../models/banner'
import './App.css';

function App() {
  const [banners, setBanners] = useState<BannerData[] | null>(null)

  useEffect(() => {
    (async () => {
      let banners = await ModelBanner.getAllBanner()
      console.log(banners);
      
      setBanners(banners)
    } )();
  }, [])

  return (
    <div className="App">
      <h1>aaaaaaa</h1>
      <div>
        {
          banners?.map(b => {
            return <p key={b.ID}>{b.href}</p>
          })
        }
      </div>
    </div>
  );
}

export default App;
