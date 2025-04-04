import React from 'react';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <CookieConsent /> {/* Add the CookieConsent component */}
      <p>Start prompting (or editing) to see magic happen :)</p>
    </div>
  );
}

export default App;
