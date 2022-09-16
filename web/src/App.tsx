import React from 'react';

import Header from './components/header/header';
import { CategoryData } from './models/category';

interface Props {
  categories: CategoryData[];
}

function App(props: Props) {
  return (
    <Header catetories={props.categories} />
  );
}

export default App;
