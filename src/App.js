import React from 'react';
import Review from './Review';
function App() {
  return (
    <main>
      <div className="container">
        <header className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </header>
        <Review />
      </div>
    </main>
  );
}

export default App;
