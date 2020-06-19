import React from 'react';

import SignIn from './pages/signin/index';
import SignUp from './pages/signup/index';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
