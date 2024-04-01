import reportWebVitals from './utils/test/reportWebVitals';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import navigationLinks from './utils/_navigationLinks.js';

import GlobalStyle from './utils/style/GlobalStyle'
import './reset.css';

import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Router>
    <GlobalStyle />
    <Header />
    <Routes>
      {navigationLinks.map((link) => (
        <Route key={link.label} path={link.path} element={link.component} />
      ))}
    </Routes>
    <Footer />
  </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
