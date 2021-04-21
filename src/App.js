import React from 'react';
import { JumbotronContainer } from './containers/jumbotron';
import { FooterContainer } from './containers/footer';
import { FaqsContainer } from './containers/faqs';

function App() {
  return (
    <div className="App">
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
