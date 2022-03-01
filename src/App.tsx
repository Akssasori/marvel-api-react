import React from 'react';
import Characters from './pages/Characters';
import GlobalStyle from './styles/global';



const baseURL = "http://gateway.marvel.com/v1/public/characters?";

const App: React.FunctionComponent = () => {
  return (
  <>
  <Characters />
  <GlobalStyle />
  </>
  );
};

export default App;

