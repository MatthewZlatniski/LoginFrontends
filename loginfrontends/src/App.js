// Example using an environment variable:
import React from 'react';
import ScrumDaddyLogin from './components/scrumDaddy/LoginPage';
// Later, import other login pages, e.g., import AnotherLogin from './components/anotherLogin/LoginPage';

function App() {
  const loginPageType = process.env.REACT_APP_LOGIN_PAGE;

  switch (loginPageType) {
    case 'scrumDaddy':
      return <ScrumDaddyLogin />;
    // Add cases for other login pages when available:
    // case 'another':
    //   return <AnotherLogin />;
    default:
      return <ScrumDaddyLogin />;
  }
}

export default App;
