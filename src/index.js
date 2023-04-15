import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header';
import Main from './main';
import Footer from './footer';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<App />);