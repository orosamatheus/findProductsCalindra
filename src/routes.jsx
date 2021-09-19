import { Switch, Route } from 'react-router-dom';

import HomeView from './views/Home.view';
import GlobalStyle from './styles/GlobalStyle';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomeView} />
      <GlobalStyle />
    </Switch>
  );
}
