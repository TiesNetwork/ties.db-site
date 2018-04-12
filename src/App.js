import React from 'react';
import { Route } from 'react-router-dom';

/** Views **/
import Main from 'views/Main';

import styles from './App.scss';

const App = () => (
  <div className={styles.Root}>
    <Route path="/" component={Main} />
  </div>
)

export default App;
