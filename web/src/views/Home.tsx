import React from 'react';

import Header from '../components/header/header';
import { setAppData, AppData } from '../models/app';

interface Props {
  appData?: AppData
}

function App(props: Props) {
  props.appData && setAppData(props.appData)

  return (
    <Header />
  );
}

export default App;
