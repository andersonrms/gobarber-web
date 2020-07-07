import React from 'react';

import SignIn from './pages/signin/index';
import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
