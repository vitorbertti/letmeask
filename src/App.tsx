import Home from './pages/Home';
import NewRoom from './pages/NewRoom';

import { BrowserRouter, Route } from 'react-router-dom';

import AuthContextProvider from './contexts/AuthContext';

const App = () => {
  

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route exact path="/" component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>

  );
}

export default App;
