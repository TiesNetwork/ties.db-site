import React from 'react';
import { Route } from 'react-router-dom';

/** Views **/
import Main from 'views/Main';
import Team from 'views/Team';

import styles from './App.scss';

const App = () => (
  <div className={styles.Root}>
    <Route path="/" component={Main} />
    <Route path="/team" component={Team} />
  </div>
)

export default App;
